import * as React from "react";
import { colors } from "pebble-shared";
import { tagStyle, iconClass } from "./styles/Tag.styles";
import { TagProps } from "./typings/Tag";

import Ink from "react-ink";

const Tag: React.FunctionComponent<TagProps> = ({
  label,
  color,
  onClose,
  styles
}) => {
  return (
    <div
      className={(!!onClose && "__pebble__tag__with__close") || ""}
      css={[tagStyle, styles]}
      style={{
        color: colors[color].base,
        // @ts-ignore
        backgroundColor: colors[color].lightest || colors[color].light
      }}
    >
      {label}{" "}
      {onClose && (
        <i onClick={onClose} className="pi pi-close" css={iconClass}>
          <Ink />
        </i>
      )}
    </div>
  );
};

export default Tag;
