export const textEllipsis = {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
};
export const flexRow = {
    display: "flex",
    flexDirection: "row"
};
export const flexSpaceBetween = {
    ...flexRow,
    justifyContent: "space-between",
    alignContent: "initial"
};
export const flexMiddleAlign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};
export const getPlaceholderStyle = (color) => ({
    "::-webkit-input-placeholder": { color },
    "::-moz-placeholder": { color },
    ":-ms-input-placeholder": { color },
    ":-moz-placeholder": { color },
    "::placeholder": { color }
});
//# sourceMappingURL=mixins.js.map