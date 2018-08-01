import { injectGlobal } from "react-emotion";

export const iconNames = [
  "add",
  "arrow-down",
  "arrow-drop-down",
  "arrow-drop-up",
  "arrow-right",
  "back",
  "calendar",
  "call",
  "car",
  "channel-partners",
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
  "digital-leads",
  "direct-walkins",
  "direction",
  "document-uploaded",
  "document",
  "download",
  "edit-2",
  "edit",
  "filter",
  "fire",
  "history",
  "home-tab",
  "home",
  "incoming-calls",
  "info",
  "invoice",
  "junk",
  "leads-tab",
  "location",
  "logout-door",
  "logout",
  "mail",
  "mic",
  "more",
  "note",
  "notification",
  "open-external",
  "other-leads",
  "patchout",
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
  "spinner",
  "unchecked-radio",
  "undo",
  "update",
  "updating",
  "upload",
  "warning",
  "whatsapp"
];

export function initIconStyles() {
  injectGlobal`i {
  line-height: 1;
}

i:before {
  font-family: AnarockIcons !important;
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
.icon-arrow-drop-down:before {
  content: "\f103";
}
.icon-arrow-drop-up:before {
  content: "\f104";
}
.icon-arrow-right:before {
  content: "\f105";
}
.icon-back:before {
  content: "\f106";
}
.icon-calendar:before {
  content: "\f107";
}
.icon-call:before {
  content: "\f108";
}
.icon-car:before {
  content: "\f109";
}
.icon-channel-partners:before {
  content: "\f10a";
}
.icon-check:before {
  content: "\f10b";
}
.icon-checkbox-selected:before {
  content: "\f10c";
}
.icon-checkbox-unfilled:before {
  content: "\f10d";
}
.icon-checkbox-unselected:before {
  content: "\f10e";
}
.icon-chevron-left:before {
  content: "\f10f";
}
.icon-clock:before {
  content: "\f110";
}
.icon-close-circle-filled:before {
  content: "\f111";
}
.icon-close-circle:before {
  content: "\f112";
}
.icon-close:before {
  content: "\f113";
}
.icon-copy:before {
  content: "\f114";
}
.icon-digital-leads:before {
  content: "\f115";
}
.icon-direct-walkins:before {
  content: "\f116";
}
.icon-direction:before {
  content: "\f117";
}
.icon-document-uploaded:before {
  content: "\f118";
}
.icon-document:before {
  content: "\f119";
}
.icon-download:before {
  content: "\f11a";
}
.icon-edit-2:before {
  content: "\f11b";
}
.icon-edit:before {
  content: "\f11c";
}
.icon-filter:before {
  content: "\f11d";
}
.icon-fire:before {
  content: "\f11e";
}
.icon-history:before {
  content: "\f11f";
}
.icon-home-tab:before {
  content: "\f120";
}
.icon-home:before {
  content: "\f121";
}
.icon-incoming-calls:before {
  content: "\f122";
}
.icon-info:before {
  content: "\f123";
}
.icon-invoice:before {
  content: "\f124";
}
.icon-junk:before {
  content: "\f125";
}
.icon-leads-tab:before {
  content: "\f126";
}
.icon-location:before {
  content: "\f127";
}
.icon-logout-door:before {
  content: "\f128";
}
.icon-logout:before {
  content: "\f129";
}
.icon-mail:before {
  content: "\f12a";
}
.icon-mic:before {
  content: "\f12b";
}
.icon-more:before {
  content: "\f12c";
}
.icon-note:before {
  content: "\f12d";
}
.icon-notification:before {
  content: "\f12e";
}
.icon-open-external:before {
  content: "\f12f";
}
.icon-other-leads:before {
  content: "\f130";
}
.icon-patchout:before {
  content: "\f131";
}
.icon-pause:before {
  content: "\f132";
}
.icon-phone:before {
  content: "\f133";
}
.icon-play:before {
  content: "\f134";
}
.icon-plus:before {
  content: "\f135";
}
.icon-profile-1:before {
  content: "\f136";
}
.icon-profile:before {
  content: "\f137";
}
.icon-radio-check-filled:before {
  content: "\f138";
}
.icon-radio-check:before {
  content: "\f139";
}
.icon-radio-selected:before {
  content: "\f13a";
}
.icon-radio:before {
  content: "\f13b";
}
.icon-reschedule:before {
  content: "\f13c";
}
.icon-reset:before {
  content: "\f13d";
}
.icon-search:before {
  content: "\f13e";
}
.icon-share:before {
  content: "\f13f";
}
.icon-sms:before {
  content: "\f140";
}
.icon-spinner:before {
  content: "\f141";
}
.icon-unchecked-radio:before {
  content: "\f142";
}
.icon-undo:before {
  content: "\f143";
}
.icon-update:before {
  content: "\f144";
}
.icon-updating:before {
  content: "\f145";
}
.icon-upload:before {
  content: "\f146";
}
.icon-warning:before {
  content: "\f147";
}
.icon-whatsapp:before {
  content: "\f148";
}
`;
}
