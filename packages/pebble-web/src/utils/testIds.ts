type TestIdMap = Record<string, string | object>;

type BaseSelectIds = {
  inputId: string;
  optionGroupId: string;
};

type OptionGroupCheckBoxIds = ReturnType<typeof getOptionGroupCheckBoxTestIds>;

type OptionGroupRadioIds = ReturnType<typeof getOptionGroupRadioTestIds>;

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

export const getOptionGroupRadioTestIds = (id: string) =>
  getOptionGroupTestIds(id);

export function getOptionGroupCheckBoxTestIds(id: string) {
  return {
    applyButtonId: `${id}-apply-btn`,
    clearButtonId: `${id}-clear-btn`,
    ...getOptionGroupTestIds(id)
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
  multiSelect: true
): BaseSelectIds & OptionGroupCheckBoxIds;

export function getSelectInputTestIds(
  id: string,
  multiSelect?: false
): BaseSelectIds & OptionGroupRadioIds;

export function getSelectInputTestIds(
  id: string,
  multiSelect?: boolean
):
  | (BaseSelectIds & OptionGroupCheckBoxIds)
  | (BaseSelectIds & OptionGroupRadioIds);

export function getSelectInputTestIds(
  id: string,
  multiSelect: boolean = false
) {
  const optionGroupId = `${id}-option-group`;

  const baseIds = {
    inputId: `${id}-input`,
    optionGroupId
  };
  return {
    ...(multiSelect
      ? getOptionGroupCheckBoxTestIds(optionGroupId)
      : getOptionGroupRadioTestIds(optionGroupId)),
    ...baseIds
  };
}

export function getTypeaheadTestIds(id: string) {
  const optionGroupId = `${id}-option-group`;
  return {
    optionGroupId,
    ...getOptionGroupRadioTestIds(optionGroupId)
  };
}
