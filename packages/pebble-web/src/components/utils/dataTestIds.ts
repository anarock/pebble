type TestIdMap = Record<string, string>;

function withId(
  id: string | undefined,
  builder: (_id: string) => TestIdMap
): Partial<TestIdMap> {
  return id ? builder(id) : {};
}

export function getOptionGroupDataTestIds(_id?: string) {
  return withId(_id, id => ({
    searchBox: `${id}-search`,
    option: `${id}-option`,
    selectVisible: `${id}-select-visible`,
    clearVisible: `${id}-clear-visible`
  }));
}

export function getPhoneNumberInputDataTestIds(_id?: string) {
  return withId(_id, id => ({
    phoneInput: `${id}-phone-input`,
    country: `${id}-country-select`
  }));
}

export function getSelectInputDataTestIds(_id?: string) {
  return withId(_id, id => ({
    input: `${id}-input`,
    optionGroup: `${id}-option-group`,
    ...getOptionGroupDataTestIds(`${id}-option-group`)
  }));
}

export function getOptionGroupCheckBoxDataTestIds(_id?: string) {
  return withId(_id, id => ({
    applyButton: `${id}-apply-button`,
    clearButton: `${id}-clear-button`
  }));
}
