export const textEllipsis = {
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
} as const;

export const flexRow = {
  display: "flex",
  flexDirection: "row"
} as const;

export const flexSpaceBetween = {
  ...flexRow,
  justifyContent: "space-between",
  alignContent: "initial"
} as const;

export const flexMiddleAlign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
} as const;

export const getPlaceholderStyle = (color: string) =>
  ({
    "::-webkit-input-placeholder": { color },
    "::-moz-placeholder": { color },
    ":-ms-input-placeholder": { color },
    ":-moz-placeholder": { color },
    "::placeholder": { color }
  } as const);
