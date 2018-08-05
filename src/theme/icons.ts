import { injectGlobal } from "emotion";

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
  "face-to-face",
  "filter",
  "fire",
  "follow-up",
  "history",
  "home-filled",
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
  "others",
  "patchout",
  "pause",
  "phone-2",
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
  "site-visit",
  "sms",
  "spinner",
  "travel",
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
  font-family: PebbleIcons !important;
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
.icon-face-to-face:before {
  content: "\f11d";
}
.icon-filter:before {
  content: "\f11e";
}
.icon-fire:before {
  content: "\f11f";
}
.icon-follow-up:before {
  content: "\f120";
}
.icon-history:before {
  content: "\f121";
}
.icon-home-filled:before {
  content: "\f122";
}
.icon-home:before {
  content: "\f123";
}
.icon-incoming-calls:before {
  content: "\f124";
}
.icon-info:before {
  content: "\f125";
}
.icon-invoice:before {
  content: "\f126";
}
.icon-junk:before {
  content: "\f127";
}
.icon-leads-tab:before {
  content: "\f128";
}
.icon-location:before {
  content: "\f129";
}
.icon-logout-door:before {
  content: "\f12a";
}
.icon-logout:before {
  content: "\f12b";
}
.icon-mail:before {
  content: "\f12c";
}
.icon-mic:before {
  content: "\f12d";
}
.icon-more:before {
  content: "\f12e";
}
.icon-note:before {
  content: "\f12f";
}
.icon-notification:before {
  content: "\f130";
}
.icon-open-external:before {
  content: "\f131";
}
.icon-other-leads:before {
  content: "\f132";
}
.icon-others:before {
  content: "\f133";
}
.icon-patchout:before {
  content: "\f134";
}
.icon-pause:before {
  content: "\f135";
}
.icon-phone-2:before {
  content: "\f136";
}
.icon-phone:before {
  content: "\f137";
}
.icon-play:before {
  content: "\f138";
}
.icon-plus:before {
  content: "\f139";
}
.icon-profile-1:before {
  content: "\f13a";
}
.icon-profile:before {
  content: "\f13b";
}
.icon-radio-check-filled:before {
  content: "\f13c";
}
.icon-radio-check:before {
  content: "\f13d";
}
.icon-radio-selected:before {
  content: "\f13e";
}
.icon-radio:before {
  content: "\f13f";
}
.icon-reschedule:before {
  content: "\f140";
}
.icon-reset:before {
  content: "\f141";
}
.icon-search:before {
  content: "\f142";
}
.icon-share:before {
  content: "\f143";
}
.icon-site-visit:before {
  content: "\f144";
}
.icon-sms:before {
  content: "\f145";
}
.icon-spinner:before {
  content: "\f146";
}
.icon-travel:before {
  content: "\f147";
}
.icon-unchecked-radio:before {
  content: "\f148";
}
.icon-undo:before {
  content: "\f149";
}
.icon-update:before {
  content: "\f14a";
}
.icon-updating:before {
  content: "\f14b";
}
.icon-upload:before {
  content: "\f14c";
}
.icon-warning:before {
  content: "\f14d";
}
.icon-whatsapp:before {
  content: "\f14e";
}
`;
}
