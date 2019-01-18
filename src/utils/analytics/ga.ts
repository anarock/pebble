import isBrowser from "is-in-browser";

declare global {
  interface Window {
    GoogleAnalyticsObject: string;
  }
}

export function initGoogleAnalytics(gaId: string) {
  if (isBrowser) {
    ((s, o, g) => {
      window.GoogleAnalyticsObject = "ga";
      ga =
        ga ||
        (() => {
          (ga.q = ga.q || []).push(arguments);
        });
      ga.l = Date.now();
      const a = s.createElement(o) as HTMLScriptElement;
      const m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      if (m.parentNode) m.parentNode.insertBefore(a, m);
    })(document, "script", "https://www.google-analytics.com/analytics.js");

    ga("create", gaId, "auto");
    ga("send", "pageview");
  }
}
