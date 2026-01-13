type TestIdMap = Record<string, string>;

function withId<T extends TestIdMap>(
  id: string | undefined,
  builder: (_id: string) => Partial<T>
): Partial<T> {
  return id ? builder(id) : {};
}

type OptionGroupDataTestIds = {
  searchBox: string;
  option: string;
  selectVisible: string;
  clearVisible: string;
};

type SelectInputDataTestIds = OptionGroupDataTestIds & {
  input: string;
  optionGroup: string;
};

type OptionGroupCheckBoxDataTestIds = OptionGroupDataTestIds & {
  optionGroup: string;
  applyButton: string;
  clearButton: string;
};

type PhoneNumberInputDataTestIds = {
  phoneInput: string;
  country: string;
};

export function getOptionGroupDataTestIds(_id?: string) {
  return withId<OptionGroupDataTestIds>(_id, id => ({
    searchBox: `${id}-search`,
    option: `${id}-option`,
    selectVisible: `${id}-select-visible`,
    clearVisible: `${id}-clear-visible`
  }));
}

export function getPhoneNumberInputDataTestIds(_id?: string) {
  return withId<PhoneNumberInputDataTestIds>(_id, id => ({
    phoneInput: `${id}-phone-input`,
    country: `${id}-country-select`
  }));
}

export function getSelectInputDataTestIds(_id?: string) {
  return withId<SelectInputDataTestIds>(_id, id => ({
    input: `${id}-input`,
    optionGroup: `${id}-option-group`,
    ...getOptionGroupDataTestIds(`${id}-option-group`)
  }));
}

export function getOptionGroupCheckBoxDataTestIds(_id?: string) {
  return withId<OptionGroupCheckBoxDataTestIds>(_id, id => ({
    optionGroup: `${id}-option-group`,
    applyButton: `${id}-apply-button`,
    clearButton: `${id}-clear-button`,
    ...getOptionGroupDataTestIds(`${id}-option-group`)
  }));
}
