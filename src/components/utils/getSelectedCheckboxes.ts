export function getSelectedCheckboxes(
  changedValue: number | string,
  prevSelected?: (number | string)[]
) {
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
