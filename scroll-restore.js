(function () {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const storageKey = 'scroll:' + location.pathname + location.search;

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem(storageKey, String(window.scrollY || 0));
  }, { capture: true });

  window.addEventListener('pageshow', function (event) {
    const navigation = performance.getEntriesByType('navigation')[0];
    const isBackForward = navigation
      ? navigation.type === 'back_forward'
      : performance.navigation && performance.navigation.type === 2;

    if (event.persisted || isBackForward) {
      const stored = sessionStorage.getItem(storageKey);
      if (stored !== null) {
        window.scrollTo(0, Number(stored));
      }
    }
  });
})();
