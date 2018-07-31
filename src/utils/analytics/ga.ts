import isBrowser from "is-in-browser";

export function initGoogleAnalytics(gaId: string) {
  if (isBrowser) {
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * (new Date() as any));
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    // @ts-ignore
    window.ga("create", gaId, "auto");
    // @ts-ignore
    window.ga("send", "pageview");
  }
}
