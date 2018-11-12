import isBrowser from "is-in-browser";

export const isDesktop = ((isBrowser && window.screen.width) || 1025) > 1024;
