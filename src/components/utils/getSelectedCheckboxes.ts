import * as React from "react";

export function getSelectedCheckboxes(
  changedValue: React.ReactText,
  prevSelected?: React.ReactText[]
): React.ReactText[] {
  const _selected = prevSelected || [];
  const cloned = _selected.slice(0);
  const index = _selected.findIndex(datum => datum === changedValue);
  if (index >= 0) {
    cloned.splice(index, 1);
  } else {
    cloned.push(changedValue);
  }
  return cloned;
}
