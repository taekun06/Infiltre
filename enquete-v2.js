/* INFILTRÉ — orchestration légère de l'écran ENQUÊTE V2.
 * Aucune règle de jeu n'est modifiée ici.
 */
(function initEnqueteV2() {
    'use strict';

    let wakeLock = null;

    function getScreen() {
        return document.getElementById('screen-timer');
    }

    function syncAmbientState() {
        const screen = getScreen();
        if (!screen || !document.body) return;

        screen.classList.toggle('is-midpoint', document.body.classList.contains('ambient-midpoint'));
        screen.classList.toggle('is-final', document.body.classList.contains('ambient-final'));
        screen.classList.toggle('is-critical', document.body.classList.contains('ambient-critical'));
        screen.classList.toggle('is-paused', document.body.classList.contains('ambient-paused'));
    }

    function upgradeFoundButton() {
        const screen = getScreen();
        if (!screen) return;

        const button = Array.from(screen.querySelectorAll('button.primary'))
            .find((candidate) => (candidate.getAttribute('onclick') || '').includes('goToVote'));

        if (!button) return;
        button.textContent = 'MOT TROUVÉ';
        button.classList.add('btn-word-found');
        button.setAttribute('aria-label', 'Le maître confirme que le mot a été trouvé');
        button.setAttribute('title', 'À utiliser uniquement quand le maître vient de répondre oui');
    }

    function isTimerScreenVisible() {
        const screen = getScreen();
        if (!screen) return false;
        const style = getComputedStyle(screen);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }

    async function acquireWakeLock() {
        if (!('wakeLock' in navigator) || wakeLock || !isTimerScreenVisible()) return;
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => { wakeLock = null; });
        } catch (_) {
            // Certains navigateurs ou modes économie d'énergie peuvent le refuser.
        }
    }

    async function releaseWakeLock() {
        if (!wakeLock) return;
        try { await wakeLock.release(); } catch (_) {}
        wakeLock = null;
    }

    function syncWakeLock() {
        if (isTimerScreenVisible()) acquireWakeLock();
        else releaseWakeLock();
    }

    function boot() {
        upgradeFoundButton();
        syncAmbientState();
        syncWakeLock();

        const bodyObserver = new MutationObserver(() => {
            syncAmbientState();
            syncWakeLock();
        });
        bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        const screen = getScreen();
        if (screen) {
            const screenObserver = new MutationObserver(syncWakeLock);
            screenObserver.observe(screen, { attributes: true, attributeFilter: ['class', 'style'] });
        }

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') syncWakeLock();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
