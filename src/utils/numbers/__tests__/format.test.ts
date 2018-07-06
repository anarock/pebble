import {getShortenedNumber} from "../format";

describe("utility: format", () => {
	test("getShortenedNumber: returns correct output", () => {
		expect(getShortenedNumber(null)).toBeFalsy();

		expect(getShortenedNumber(5098760909)).toEqual("509.9 Cr");
		expect(getShortenedNumber(5098760909, 3)).toEqual("509.876 Cr");

		expect(getShortenedNumber(120009)).toEqual("1.2 L");
		expect(getShortenedNumber(120009, 6)).toEqual("1.200090 L");

		expect(getShortenedNumber(15010, 0)).toEqual("15 K");
		expect(getShortenedNumber(15010, 2)).toEqual("15.01 K");
	})
});
