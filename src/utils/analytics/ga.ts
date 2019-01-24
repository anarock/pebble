import isBrowser from "is-in-browser";

declare global {
  interface Window {
    GoogleAnalyticsObject: string;
    ga: UniversalAnalytics.ga;
  }
}

export function initGoogleAnalytics(gaId: string) {
  if (isBrowser) {
    ((s, o, g) => {
      window.GoogleAnalyticsObject = "ga";
      window.ga =
        window.ga ||
        (() => {
          (window.ga.q = window.ga.q || []).push(arguments);
        });
      window.ga.l = Date.now();
      const a = s.createElement(o) as HTMLScriptElement;
      const m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      if (m.parentNode) m.parentNode.insertBefore(a, m);
    })(document, "script", "https://www.google-analytics.com/analytics.js");

    window.ga("create", gaId, "auto");
    window.ga("send", "pageview");
  }
}
