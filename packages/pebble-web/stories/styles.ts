// @ts-nocheck

import { css, cx } from "emotion";
import { colors } from "pebble-web";

export const inputLabel = css({
  fontSize: 14,
  fontWeight: "bold",
  marginBottom: 10
});

export const asterik = css({
  color: colors.red.base
});

export const wrapper = css({
  marginBottom: 0,
  "&._pebble_input_wrapper_textarea": {
    height: 144
  }
});

export const inputWrapper = css({
  padding: "0 16px",
  border: `1px solid ${colors.gray.light}`,
  borderRadius: "3px",
  overflow: "hidden"
});

export const inputWrapperLeft = css({
  paddingLeft: 0
});

export const inputWrapperRight = css({
  paddingRight: 0
});

export const inputWrapperError = css({
  borderColor: colors.red.base
});

const input = css({
  color: colors.gray.darker,
  border: "none",

  "&::-webkit-input-placeholder": {
    color: colors.gray.base
  }
});

export const textInput = cx(
  input,
  css({
    padding: 0
  })
);

export const textArea = cx(
  input,
  css({
    marginTop: 0,
    paddingBlock: "18px",
    height: 124
  })
);

export const underline = css({
  display: "none"
});

export const select = css({
  marginBottom: 0
});

export const selectedOption = css({
  background: colors.violet.lightest,
  // color: colors.violet.base,
  "&:hover": { background: colors.violet.lightest }
});

export const selectArrow = css({
  margin: 0,
  top: "20px"
});
