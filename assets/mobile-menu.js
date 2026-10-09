/* Mobile menu - vanilla JS (jQuery ki zaroorat nahi) */
(function () {
    function init() {
        var nav = document.querySelector('.main-menu .navigation');
        var toggler = document.querySelector('.mobile-nav-toggler');
        if (!nav || !toggler) return;

        // Purana/duplicate drawer jahan bhi ho, hata do
        document.querySelectorAll('.mobile-menu').forEach(function (el) { el.remove(); });

        var logo = document.querySelector('.header .logo img');
        var drawer = document.createElement('div');
        drawer.className = 'mobile-menu';
        drawer.innerHTML =
            '<div class="menu-backdrop"></div>' +
            '<nav class="menu-box">' +
                '<div class="close-btn" aria-label="Close">&times;</div>' +
                '<div class="nav-logo">' + (logo ? '<img src="' + logo.getAttribute('src') + '" alt="Logo">' : '') + '</div>' +
                '<div class="menu-outer"></div>' +
            '</nav>';

        var clone = nav.cloneNode(true);
        clone.removeAttribute('id');
        clone.className = 'navigation';
        clone.querySelectorAll('.mega-footer').forEach(function (el) { el.remove(); });
        var home = clone.querySelector('a.home');
        if (home) home.innerHTML = '<i class="fa fa-home"></i> Home';
        drawer.querySelector('.menu-outer').appendChild(clone);
        document.body.appendChild(drawer);

        // Manufacturing dropdown (accordion)
        clone.querySelectorAll('.mega-menu-item > a').forEach(function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                a.parentElement.classList.toggle('open');
            });
        });

        function open()  { document.body.classList.add('mobile-menu-visible'); }
        function close() { document.body.classList.remove('mobile-menu-visible'); }

        toggler.addEventListener('click', function (e) { e.preventDefault(); open(); });
        drawer.querySelector('.menu-backdrop').addEventListener('click', close);
        drawer.querySelector('.close-btn').addEventListener('click', close);
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

        // Link click par drawer band (dropdown toggle ko chhor kar)
        drawer.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (a && !a.parentElement.classList.contains('mega-menu-item')) close();
        });

        window.addEventListener('resize', function () { if (window.innerWidth > 991) close(); });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
