/*
 * INFILTRÉ — couche de branding V2
 *
 * Cette couche ne modifie volontairement pas les identifiants, variables,
 * clés de sauvegarde ni règles historiques liées au terme "tricheur".
 * Elle ne transforme que le contenu présenté à l'utilisateur.
 */
(function initInfiltreBranding() {
    'use strict';

    const TEXT_REPLACEMENTS = [
        [/TRICHEUR/g, 'INFILTRÉ'],
        [/Tricheur/g, 'Infiltré'],
        [/tricheur/g, 'infiltré']
    ];

    const USER_FACING_ATTRIBUTES = ['aria-label', 'title', 'data-title', 'placeholder'];
    const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE']);

    function replaceBrandText(value) {
        if (typeof value !== 'string' || !value) return value;
        return TEXT_REPLACEMENTS.reduce((result, [pattern, replacement]) => {
            return result.replace(pattern, replacement);
        }, value);
    }

    function brandTextNode(node) {
        if (!node || node.nodeType !== Node.TEXT_NODE) return;
        const parent = node.parentElement;
        if (!parent || SKIP_TAGS.has(parent.tagName)) return;

        const nextValue = replaceBrandText(node.nodeValue);
        if (nextValue !== node.nodeValue) node.nodeValue = nextValue;
    }

    function brandElement(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
        if (SKIP_TAGS.has(element.tagName)) return;

        USER_FACING_ATTRIBUTES.forEach((attribute) => {
            if (!element.hasAttribute(attribute)) return;
            const currentValue = element.getAttribute(attribute);
            const nextValue = replaceBrandText(currentValue);
            if (nextValue !== currentValue) element.setAttribute(attribute, nextValue);
        });

        element.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) brandTextNode(child);
            else if (child.nodeType === Node.ELEMENT_NODE) brandElement(child);
        });
    }

    function applyBranding(root = document.body) {
        if (!root) return;
        if (root.nodeType === Node.TEXT_NODE) brandTextNode(root);
        else brandElement(root);
    }

    function setDocumentIdentity() {
        document.title = 'INFILTRÉ';
        document.documentElement.dataset.brand = 'infiltre';
    }

    function startBrandObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'characterData') {
                    brandTextNode(mutation.target);
                    return;
                }

                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE) brandTextNode(node);
                    else if (node.nodeType === Node.ELEMENT_NODE) applyBranding(node);
                });

                if (mutation.type === 'attributes' && mutation.target) {
                    brandElement(mutation.target);
                }
            });
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
            characterData: true,
            attributes: true,
            attributeFilter: USER_FACING_ATTRIBUTES
        });
    }

    function boot() {
        setDocumentIdentity();
        applyBranding();
        startBrandObserver();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
