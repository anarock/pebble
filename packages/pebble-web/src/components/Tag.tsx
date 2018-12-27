import * as React from "react";
import { colors } from "pebble-theme";
import { tagStyle, iconClass } from "./styles/Tag.styles";
import { TagProps } from "./typings/Tag";
import { cx } from "emotion";
import Ink from "react-ink";

const Tag: React.FunctionComponent<TagProps> = ({
  label,
  color,
  onClose,
  className
}) => {
  const wrapperClassName = cx(tagStyle, {
    __pebble__tag__with__close: !!onClose
  });
  const _className = cx(wrapperClassName, className);
  return (
    <div
      className={_className}
      style={{
        // @ts-ignore
        color: colors[color].base,
        // @ts-ignore
        backgroundColor: colors[color].lightest || colors[color].light
      }}
    >
      {label}{" "}
      {onClose && (
        <i onClick={onClose} className={cx("pi", "pi-close", iconClass)}>
          <Ink />
        </i>
      )}
    </div>
  );
};

export default Tag;
