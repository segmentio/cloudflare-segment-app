(function () {
  var options = INSTALL_OPTIONS

  if (!options.writeKey) return

  window.analytics.load(options.writeKey)

  if (options.autoPage) {
    window.analytics.page()
  }
})();
