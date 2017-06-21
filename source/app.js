(function () {
  var options = INSTALL_OPTIONS

  var TAG_LABELS = {
    DEFAULT: 'Element',
    A: 'Link',
    BUTTON: 'Button'
  }

  if (!options.writeKey) return

  window.analytics.load(options.writeKey)

  if (options.autoPage) {
    window.analytics.page()
  }

  options.trackedActions.forEach(function (trackedAction) {
    var element = document.querySelector(trackedAction.location)

    if (!element) return

    var style = document.defaultView.getComputedStyle(element)

    analytics.trackLink(link, trackedAction.label, {
      location: trackedAction.location,
      color: JSON.stringify({text: style.color, background: style.backgroundColor}),
      text: element.textContent,
      CTA: element.textContent,
      type: TAG_LABELS[element.tagName] || TAG_LABELS.DEFAULT,
      pageTitle: document.title
    });
  })
})();
