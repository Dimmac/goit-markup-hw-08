(() => {
    const menuBtnRef = document.querySelector('[data-modal-button]');

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute("aria-expanded", !expanded);
    });
})();