type TestIdMap = Record<string, string | object>;

export function getTestIds<T extends TestIdMap>(
  id: string | undefined,
  builder: (_id: string) => Partial<T>
): Partial<T> {
  return id ? builder(id) : {};
}

export function getOptionTestId(id: string, index: number) {
  return `${id}-${index}`;
}

export function getRadioGroupTestIds(id: string) {
  return {
    option: `${id}-option`
  };
}

export function getOptionGroupTestIds(id: string) {
  return {
    searchBox: `${id}-search`,
    option: `${id}-option`,
    selectVisible: `${id}-select-visible`,
    clearVisible: `${id}-clear-visible`
  };
}

// OptionGroupRadio directly uses OptionGroup.
// so we can use the same test ids for both
export const getOptionGroupRadioTestIds = (id: string) =>
  getOptionGroupTestIds(id);

export function getOptionGroupCheckBoxTestIds(id: string) {
  return {
    optionGroup: `${id}-option-group`,
    applyButton: `${id}-apply-btn`,
    clearButton: `${id}-clear-btn`,
    ...getOptionGroupTestIds(`${id}-option-group`)
  };
}

export function getPhoneNumberInputTestIds(id: string) {
  return {
    phone: `${id}-phone`,
    country: `${id}-country`,
    countryTestIds: getSelectInputTestIds(`${id}-country`)
  };
}

export function getSelectInputTestIds(
  id: string,
  multiSelect: boolean = false
) {
  const optionGroupId = `${id}-option-group`;
  return {
    input: `${id}-input`,
    optionGroup: optionGroupId,
    ...(multiSelect
      ? getOptionGroupCheckBoxTestIds(optionGroupId)
      : getOptionGroupRadioTestIds(optionGroupId))
  };
}

export function getTypeaheadTestIds(id: string) {
  const optionGroupId = `${id}-option-group`;
  return {
    search: `${id}-search`,
    optionGroup: optionGroupId,
    ...getOptionGroupRadioTestIds(optionGroupId)
  };
}
