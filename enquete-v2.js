/* INFILTRÉ — orchestration légère de l'écran ENQUÊTE V2.
 * Aucune règle de jeu n'est modifiée ici.
 */
(function initEnqueteV2() {
    'use strict';

    function getTimerScreen() {
        return document.getElementById('screen-timer');
    }

    function getRoleScreen() {
        return document.getElementById('screen-game');
    }

    function isVisible(element) {
        if (!element) return false;
        const style = getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }

    function syncAmbientState() {
        const screen = getTimerScreen();
        if (!screen || !document.body) return;

        screen.classList.toggle('is-midpoint', document.body.classList.contains('ambient-midpoint'));
        screen.classList.toggle('is-final', document.body.classList.contains('ambient-final'));
        screen.classList.toggle('is-critical', document.body.classList.contains('ambient-critical'));
        screen.classList.toggle('is-paused', document.body.classList.contains('ambient-paused'));
    }

    function syncLayoutState() {
        if (!document.body) return;
        document.body.classList.toggle('enquete-v2-active', isVisible(getTimerScreen()));
        document.body.classList.toggle('role-v2-active', isVisible(getRoleScreen()));
    }

    function upgradeFoundButton() {
        const screen = getTimerScreen();
        if (!screen) return;

        const button = Array.from(screen.querySelectorAll('button.primary'))
            .find((candidate) => (candidate.getAttribute('onclick') || '').includes('goToVote'));

        if (!button) return;
        button.textContent = 'MOT TROUVÉ';
        button.classList.add('btn-word-found');
        button.setAttribute('aria-label', 'Le maître confirme que le mot a été trouvé');
        button.setAttribute('title', 'À utiliser uniquement quand le maître vient de répondre oui');
    }

    function observeScreen(element) {
        if (!element) return;
        const observer = new MutationObserver(() => {
            syncLayoutState();
            syncAmbientState();
        });
        observer.observe(element, { attributes: true, attributeFilter: ['class', 'style'] });
    }

    function boot() {
        upgradeFoundButton();
        syncAmbientState();
        syncLayoutState();

        const bodyObserver = new MutationObserver(syncAmbientState);
        bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        observeScreen(getTimerScreen());
        observeScreen(getRoleScreen());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
