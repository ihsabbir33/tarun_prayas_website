(function () {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const storageKey = 'scroll:' + location.pathname + location.search;

  function saveScroll() {
    sessionStorage.setItem(storageKey, String(window.scrollY || 0));
  }

  function isInternalLink(href) {
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return false;
    }
    try {
      const url = new URL(href, location.href);
      return url.origin === location.origin && url.pathname !== location.pathname;
    } catch (err) {
      return false;
    }
  }

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (isInternalLink(href)) {
      saveScroll();
    }
  }, true);

  window.addEventListener('pagehide', saveScroll, { capture: true });
  window.addEventListener('beforeunload', saveScroll, { capture: true });

  window.addEventListener('pageshow', function (event) {
    const navigation = performance.getEntriesByType('navigation')[0];
    const isBackForward = navigation
      ? navigation.type === 'back_forward'
      : performance.navigation && performance.navigation.type === 2;

    if (event.persisted || isBackForward) {
      const stored = sessionStorage.getItem(storageKey);
      if (stored !== null) {
        window.requestAnimationFrame(function () {
          window.scrollTo(0, Number(stored));
        });
      }
    }
  });
})();
