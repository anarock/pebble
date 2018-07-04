import * as React from "react";
import { colors } from "@src/theme";
import { tagStyle } from "@src/components/styles/Tag.styles";
import { TagProps } from "@src/components/typings/Tag";

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
        backgroundColor: colors[color].light,
        display: onClose ? "flex" : "inline-flex"
      }}
    >
      {label}{" "}
      {onClose && (
        <i
          style={{ borderLeft: `1px solid ${colors.gray.light}` }}
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
