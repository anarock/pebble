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
    optionId: `${id}-option`
  };
}

export function getOptionGroupTestIds(id: string) {
  return {
    searchBoxId: `${id}-search`,
    optionId: `${id}-option`,
    selectVisibleId: `${id}-select-visible`,
    clearVisibleId: `${id}-clear-visible`
  };
}

// OptionGroupRadio directly uses OptionGroup.
// so we can use the same test ids for both
export const getOptionGroupRadioTestIds = (id: string) =>
  getOptionGroupTestIds(id);

export function getOptionGroupCheckBoxTestIds(id: string) {
  return {
    optionGroupId: `${id}-option-group`,
    applyButtonId: `${id}-apply-btn`,
    clearButtonId: `${id}-clear-btn`,
    ...getOptionGroupTestIds(`${id}-option-group`)
  };
}

export function getPhoneNumberInputTestIds(id: string) {
  return {
    phoneId: `${id}-phone`,
    countryId: `${id}-country`,
    countryInputIds: getSelectInputTestIds(`${id}-country`)
  };
}

export function getSelectInputTestIds(
  id: string,
  multiSelect: boolean = false
) {
  const optionGroupId = `${id}-option-group`;
  return {
    inputId: `${id}-input`,
    optionGroupId,
    ...(multiSelect
      ? getOptionGroupCheckBoxTestIds(optionGroupId)
      : getOptionGroupRadioTestIds(optionGroupId))
  };
}

export function getTypeaheadTestIds(id: string) {
  const optionGroupId = `${id}-option-group`;
  const { searchBoxId: _s, ...rest } = getOptionGroupRadioTestIds(
    optionGroupId
  );
  return {
    searchBoxId: `${id}-search`,
    optionGroupId,
    ...rest
  };
}
