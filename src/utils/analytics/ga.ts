import isBrowser from "is-in-browser";

declare global {
  interface Window {
    ga: {
      function(args: any[]): void;
      q: any[];
      l: number;
    };
    GoogleAnalyticsObject: string;
  }
}

export function initGoogleAnalytics(gaId: string) {
  if (isBrowser) {
    (function(s, o, g) {
      window.GoogleAnalyticsObject = "ga";
      window.ga =
        window.ga ||
        function() {
          (window.ga.q = window.ga.q || []).push(arguments);
        };
      window.ga.l = 1 * (new Date() as any);
      const a = <HTMLScriptElement>s.createElement(o);
      const m = s.getElementsByTagName(o)[0];
      a.async = true;
      a.src = g;
      m.parentNode && m.parentNode.insertBefore(a, m);
    })(document, "script", "https://www.google-analytics.com/analytics.js");

    // @ts-ignore
    window.ga("create", gaId, "auto");
    // @ts-ignore
    window.ga("send", "pageview");
  }
}
