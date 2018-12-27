import isBrowser from "is-in-browser";

function width() {
  return (isBrowser && window.screen.width) || 1025;
}

export const isDesktop = /*@__PURE__*/ width() > 1024;
