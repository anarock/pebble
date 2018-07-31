import * as React from "react";
import { colors, constants } from "../theme";
import { tagStyle } from "./styles/Tag.styles";
import { TagProps } from "./typings/Tag";
import { cx } from "react-emotion";
import Ink from "react-ink";

const Tag: React.SFC<TagProps> = ({ label, color, onClose }) => {
  const wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  return (
    <div
      className={wrapperClassName}
      style={{
        color: colors[color].base,
        backgroundColor: colors[color].light
      }}
    >
      {label}{" "}
      {onClose && (
        <i
          style={{ borderLeft: constants.border.base }}
          onClick={onClose}
          className="icon-close"
        >
          <Ink />
        </i>
      )}
    </div>
  );
};

export default Tag;
