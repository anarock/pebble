import isBrowser from "is-in-browser";

export function initGoogleAnalytics(gaId: string) {
  if (isBrowser) {
    (function(i, s, o, g, r) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * (new Date() as any));
      const a = <HTMLScriptElement>s.createElement(o);
      const m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      m.parentNode && m.parentNode.insertBefore(a, m);
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
