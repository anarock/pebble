import * as React from "react";
import renderer from "react-test-renderer";
import Button from "@src/components/Button";
import combos from "combos";

describe("Button Combos test", () => {
	const _props = {
		disabled: [true, false],
		type: ["primary", "secondary", "dropdown", "link"],
		showRipple: [true, false]
	};

	const _combos = combos(_props);

	test.each(_combos)("%o", (props) => {
		const button = renderer.create(
			<Button {...props} onClick={() => {}}>Submit</Button>
		);

		const tree = button.toJSON();
		expect(tree).toMatchSnapshot()
	})
});

