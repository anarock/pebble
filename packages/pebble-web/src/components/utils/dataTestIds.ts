type TestIdMap = Record<string, string>;

export function getTestIds<T extends TestIdMap>(
  id: string | undefined,
  builder: (_id: string) => Partial<T>
): Partial<T> {
  return id ? builder(id) : {};
}

export function getOptionGroupTestIds(id: string) {
  return {
    searchBox: `${id}-search`,
    option: `${id}-option`,
    selectVisible: `${id}-select-visible`,
    clearVisible: `${id}-clear-visible`
  };
}

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
    country: `${id}-country`
  };
}

export function getSelectInputTestIds(
  id: string,
  multiSelect: boolean = false
) {
  return {
    input: `${id}-input`,
    optionGroup: `${id}-option-group`,
    ...(multiSelect
      ? getOptionGroupCheckBoxTestIds(`${id}-option-group`)
      : getOptionGroupTestIds(`${id}-option-group`))
  };
}

export function getRadioGroupTestIds(id: string) {
  return {
    option: `${id}-option`
  };
}

export function getOptionTestId(id: string, index: number) {
  return `${id}-${index}`;
}
