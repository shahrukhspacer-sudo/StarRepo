/* ==========================================================================
   MOBILE MENU (shared, index jaisa) - har page me inline <style> ke BAAD link karo
   ========================================================================== */

/* Desktop: hamburger aur drawer dono band */
.mobile-nav-toggler { display: none !important; }
.mobile-menu { display: none !important; }

@media only screen and (max-width: 991px) {

    /* Logo center, contact info hide */
    .header-contact-info { display: none !important; }
    .header-left { width: 100% !important; float: none !important; display: flex !important; justify-content: center !important; margin-bottom: 0 !important; }
    .header-right { display: none !important; }

    /* Blue bar: left me orange hamburger, right me search (Get a Quote hide) */
    .header-bottom .main-menu,
    .header-bottom .navbar-collapse { display: none !important; }
    .header-bottom .outer-box { display: flex !important; align-items: center !important; justify-content: space-between !important; }
    .header-bottom_left { width: auto !important; }
    .header-bottom_right { display: flex !important; align-items: center !important; height: 60px !important; }
    .header-bottom_right__btn { display: none !important; }
    .header-bottom_right .search-box { display: none !important; }
    .outer-search-box-style1 { padding-left: 20px; border-left: 1px solid rgba(255,255,255,0.25); height: 40px; display: flex; align-items: center; }
    .outer-search-box-style1 .seach-toggle { color: #fff !important; font-size: 20px; cursor: pointer; line-height: 1; }
    .outer-search-box-style1 .seach-toggle span { color: #fff !important; }

    /* Orange hamburger */
    .mobile-nav-toggler {
        display: flex !important;
        align-items: center; justify-content: center;
        width: 46px; height: 38px;
        background-color: var(--theme-orange, #f37021) !important;
        border-radius: 0 !important;
        padding: 0 !important;
        cursor: pointer;
        position: relative;
        z-index: 101;
    }
    .mobile-nav-toggler .inner { display: block; }
    .mobile-nav-toggler .icon-bar { display: block; width: 24px; height: 2px; background: #fff; margin: 5px 0; }

    /* Drawer */
    .mobile-menu {
        display: block !important;
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        width: auto; height: auto;
        z-index: 99999;
        visibility: hidden;
        opacity: 1; transform: none;
        pointer-events: none;
    }
    .mobile-menu .menu-backdrop {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.7);
        opacity: 0; visibility: visible; transition: opacity .35s ease;
    }
    .mobile-menu .menu-box {
        position: absolute; left: 0; top: 0;
        width: 300px; max-width: 85%; height: 100%;
        overflow-y: auto;
        background: var(--theme-blue, #2b3088) !important;
        padding: 30px 20px;
        transform: translateX(-100%);
        transition: transform .35s ease;
        z-index: 5;
    }
    .mobile-menu .close-btn {
        position: absolute; right: 14px; top: 14px;
        width: 32px; height: 32px; line-height: 28px;
        text-align: center; font-size: 22px; color: #fff; cursor: pointer;
        border: 2px solid #fff; border-radius: 50%;
        z-index: 10;
    }
    .mobile-menu .nav-logo { background: #fff; padding: 10px 15px; border-radius: 6px; margin: 40px 0 15px; text-align: center; }
    .mobile-menu .nav-logo img { max-width: 180px; width: 100%; height: auto; display: inline-block; }

    body.mobile-menu-visible { overflow: hidden; }
    body.mobile-menu-visible .mobile-menu { visibility: visible; pointer-events: auto; }
    body.mobile-menu-visible .mobile-menu .menu-backdrop { opacity: 1; }
    body.mobile-menu-visible .mobile-menu .menu-box { transform: translateX(0); }

    /* Drawer links */
    .mobile-menu .navigation { list-style: none; margin: 0; padding: 0; display: block; height: auto; }
    .mobile-menu .navigation > li { display: block; height: auto; border-bottom: 1px solid rgba(255,255,255,0.15); position: static; background: none; }
    .mobile-menu .navigation > li > a {
        display: flex; align-items: center; justify-content: space-between;
        padding: 13px 0; color: #fff !important; font-weight: 700; font-size: 14px;
        text-transform: uppercase; text-decoration: none; line-height: 1.3; height: auto; background: none;
        border: 0 !important;
    }
    .mobile-menu .navigation > li > a i { margin-left: 8px; transition: transform .3s; }
    .mobile-menu .navigation > li.open > a,
    .mobile-menu .navigation > li > a:hover { color: var(--theme-red, #e31820) !important; }
    .mobile-menu .navigation > li.open > a i.fa-angle-down { transform: rotate(180deg); }
    .mobile-menu .navigation > li > a.home { justify-content: flex-start; gap: 10px; }

    /* Drawer me mega menu = accordion */
    .mobile-menu .mega-menu {
        position: static !important; opacity: 1 !important; visibility: visible !important;
        transform: none !important; display: none;
        width: 100%; padding: 0 0 12px 12px; margin: 0;
        background: transparent; box-shadow: none; border: 0; border-radius: 0;
    }
    .mobile-menu .navigation > li.open > .mega-menu { display: block; }
    .mobile-menu .mega-menu .row { display: block; margin: 0; }
    .mobile-menu .mega-menu [class*="col-"] { width: 100%; max-width: 100%; padding: 0; flex: none; float: none; }
    .mobile-menu .mega-title {
        display: flex; justify-content: space-between; align-items: center;
        margin: 14px 0 8px; padding: 0 0 8px; font-size: 12px; letter-spacing: .5px;
        color: #fff; border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .mobile-menu .mega-title i { font-size: 16px; color: var(--theme-orange, #f37021); }
    .mobile-menu .mega-list { list-style: none; margin: 0; padding: 0; }
    .mobile-menu .mega-list li { margin: 0; border: 0; }
    .mobile-menu .mega-list li a {
        display: block; padding: 7px 0 !important; color: #dbe2f0 !important;
        font-size: 13.5px !important; font-weight: 500 !important; text-transform: none !important;
        text-decoration: none; height: auto !important; border: 0 !important;
    }
    .mobile-menu .mega-list li a:hover { color: #fff !important; padding-left: 5px !important; }
    .mobile-menu .mega-footer { display: none; }

    /* Social icons */
    .mobile-menu .social-links { margin-top: 25px; }
    .mobile-menu .social-links ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 10px; }
    .mobile-menu .social-links ul li a {
        display: flex; align-items: center; justify-content: center;
        width: 36px; height: 36px; border-radius: 50%;
        background: var(--theme-red, #e31820); color: #fff !important; font-size: 16px; text-decoration: none;
    }
}