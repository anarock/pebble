import isBrowser from "is-in-browser";

const defaultDimensions = {
  height: 800,
  width: 1025
};

const dimensions = (function() {
  let width, height;

  return () => {
    if (!isBrowser) return defaultDimensions;

    if (!width || !height) {
      [width, height] = [window.screen.width, window.screen.height];
    }

    return {
      width,
      height
    };
  };
})();

export const isDesktop = dimensions().width > 1024;
