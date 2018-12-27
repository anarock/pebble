import * as React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";

import { PhoneNumberInputProps } from "../typings/PhoneNumberInput";
import Option from "../Option";
import Select from "../Select";
import PhoneNumberInput from "../PhoneNumberInput";
import countries from "./fixtures/countrycodes";
import { SelectProps } from "../typings/Select";

const SELECT_INPUT_ID = "phone-select-input-test";
const PHONE_INPUT_ID = "phone-test-input-test";

function getComponent(props: Partial<PhoneNumberInputProps> = {}) {
  return (
    <PhoneNumberInput
      onChange={() => {}}
      phone=""
      countryCode="+1"
      {...props}
      selectProps={{
        inputProps: {
          textArea: false,
          inputProps: {
            id: SELECT_INPUT_ID
          }
        }
      }}
      inputProps={{
        inputProps: {
          id: PHONE_INPUT_ID
        }
      }}
    >
      {countries.map(country => (
        <Option
          key={country.id}
          value={country.country_code}
          label={`${country.name} (${country.country_code})`}
        />
      ))}
    </PhoneNumberInput>
  );
}

describe("Component: Select", () => {
  test("default snapshot", () => {
    const component = renderer.create(getComponent());
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should open when input is clicked", () => {
    const component = mount(getComponent());

    expect(component.find(Option)).toHaveLength(0);
    component.find(`#${SELECT_INPUT_ID}`).simulate("click");

    expect(component.find(Option)).toHaveLength(countries.length);
  });

  test("should open when input is clicked", () => {
    const component = mount(getComponent());

    expect(component.find(Option)).toHaveLength(0);
    component.find(`#${SELECT_INPUT_ID}`).simulate("click");

    expect(component.find(Option)).toHaveLength(countries.length);
  });

  test("should allow only digits to be typed / pasted", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        onChange: spy
      })
    );

    const phoneInput = component.find(`#${PHONE_INPUT_ID}`);
    phoneInput.simulate("change", {
      target: {
        value: "99-997-(876)"
      }
    });
    expect(
      spy.calledWith({
        phone: "99997876",
        countryCode: "+1"
      })
    ).toBeTruthy();
  });

  test("should not trigger unnecessary renders", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        phone: "99997876",
        onChange: spy
      })
    );

    const phoneInput = component.find(`#${PHONE_INPUT_ID}`);
    phoneInput.simulate("change", {
      target: {
        value: "99997876a"
      }
    });

    expect(spy.notCalled).toBeTruthy();
  });

  test("should be able to empty the input", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        phone: "99997876",
        onChange: spy
      })
    );
    const phoneInput = component.find(`#${PHONE_INPUT_ID}`);
    phoneInput.simulate("change", {
      target: {
        value: ""
      }
    });

    expect(
      spy.calledWith({
        phone: "",
        countryCode: "+1"
      })
    ).toBeTruthy();
  });

  test("should be able to select country", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        onChange: spy
      })
    );

    component.find(`#${SELECT_INPUT_ID}`).simulate("click");
    component
      .find(Option)
      .at(0)
      .simulate("click");
    expect(
      spy.calledWith({
        phone: "",
        countryCode: countries[0].country_code
      })
    ).toBeTruthy();
  });

  test("controlled input", () => {
    const spy = sinon.spy();
    const component = mount(
      getComponent({
        onChange: spy,
        phone: "998127",
        countryCode: countries[0].country_code
      })
    );

    expect(
      (component.find(`#${PHONE_INPUT_ID}`).getDOMNode() as HTMLInputElement)
        .value
    ).toEqual("998127");
    expect((component.find(Select).props() as SelectProps).selected).toEqual(
      countries[0].country_code
    );
  });
});
