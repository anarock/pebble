import { injectGlobal } from "react-emotion";

export const iconNames = [
  "add",
  "arrow-down",
  "arrow-right",
  "back",
  "calendar",
  "call",
  "car",
  "check",
  "checkbox-selected",
  "checkbox-unfilled",
  "checkbox-unselected",
  "chevron-left",
  "clock",
  "close-circle-filled",
  "close-circle",
  "close",
  "copy",
  "direction",
  "document-uploaded",
  "document",
  "download",
  "edit-2",
  "edit",
  "filter",
  "fire",
  "history",
  "home",
  "info",
  "invoice",
  "junk",
  "location",
  "logout-door",
  "logout",
  "mail",
  "mic",
  "more",
  "note",
  "notification",
  "open-external",
  "pause",
  "phone",
  "play",
  "plus",
  "profile-1",
  "profile",
  "radio-check-filled",
  "radio-check",
  "radio-selected",
  "radio",
  "reschedule",
  "reset",
  "search",
  "share",
  "sms",
  "unchecked-radio",
  "undo",
  "update",
  "updating",
  "upload",
  "warning",
  "whatsapp"
];

export function initGlobalStyles() {
  injectGlobal`i {
  line-height: 1;
}

i:before {
  font-family: anarock-icons !important;
  font-style: normal;
  font-weight: normal !important;
  vertical-align: top;
}

.icon-add:before {
  content: "\f101";
}
.icon-arrow-down:before {
  content: "\f102";
}
.icon-arrow-right:before {
  content: "\f103";
}
.icon-back:before {
  content: "\f104";
}
.icon-calendar:before {
  content: "\f105";
}
.icon-call:before {
  content: "\f106";
}
.icon-car:before {
  content: "\f107";
}
.icon-check:before {
  content: "\f108";
}
.icon-checkbox-selected:before {
  content: "\f109";
}
.icon-checkbox-unfilled:before {
  content: "\f10a";
}
.icon-checkbox-unselected:before {
  content: "\f10b";
}
.icon-chevron-left:before {
  content: "\f10c";
}
.icon-clock:before {
  content: "\f10d";
}
.icon-close-circle-filled:before {
  content: "\f10e";
}
.icon-close-circle:before {
  content: "\f10f";
}
.icon-close:before {
  content: "\f110";
}
.icon-copy:before {
  content: "\f111";
}
.icon-direction:before {
  content: "\f112";
}
.icon-document-uploaded:before {
  content: "\f113";
}
.icon-document:before {
  content: "\f114";
}
.icon-download:before {
  content: "\f115";
}
.icon-edit-2:before {
  content: "\f116";
}
.icon-edit:before {
  content: "\f117";
}
.icon-filter:before {
  content: "\f118";
}
.icon-fire:before {
  content: "\f119";
}
.icon-history:before {
  content: "\f11a";
}
.icon-home:before {
  content: "\f11b";
}
.icon-info:before {
  content: "\f11c";
}
.icon-invoice:before {
  content: "\f11d";
}
.icon-junk:before {
  content: "\f11e";
}
.icon-location:before {
  content: "\f11f";
}
.icon-logout-door:before {
  content: "\f120";
}
.icon-logout:before {
  content: "\f121";
}
.icon-mail:before {
  content: "\f122";
}
.icon-mic:before {
  content: "\f123";
}
.icon-more:before {
  content: "\f124";
}
.icon-note:before {
  content: "\f125";
}
.icon-notification:before {
  content: "\f126";
}
.icon-open-external:before {
  content: "\f127";
}
.icon-pause:before {
  content: "\f128";
}
.icon-phone:before {
  content: "\f129";
}
.icon-play:before {
  content: "\f12a";
}
.icon-plus:before {
  content: "\f12b";
}
.icon-profile-1:before {
  content: "\f12c";
}
.icon-profile:before {
  content: "\f12d";
}
.icon-radio-check-filled:before {
  content: "\f12e";
}
.icon-radio-check:before {
  content: "\f12f";
}
.icon-radio-selected:before {
  content: "\f130";
}
.icon-radio:before {
  content: "\f131";
}
.icon-reschedule:before {
  content: "\f132";
}
.icon-reset:before {
  content: "\f133";
}
.icon-search:before {
  content: "\f134";
}
.icon-share:before {
  content: "\f135";
}
.icon-sms:before {
  content: "\f136";
}
.icon-unchecked-radio:before {
  content: "\f137";
}
.icon-undo:before {
  content: "\f138";
}
.icon-update:before {
  content: "\f139";
}
.icon-updating:before {
  content: "\f13a";
}
.icon-upload:before {
  content: "\f13b";
}
.icon-warning:before {
  content: "\f13c";
}
.icon-whatsapp:before {
  content: "\f13d";
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Anarock", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mb-10 {
  margin-bottom: 10px;
}

.ml-10 {
  margin-left: 10px;
}

.mt-10 {
  margin-top: 10px;
}
`;
}
