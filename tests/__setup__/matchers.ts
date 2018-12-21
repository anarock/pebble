import { ReactWrapper } from "enzyme";
import colors from "colors";
import cheerio from "cheerio";

declare global {
  namespace jest {
    interface Matchers<R> {
      toNotBeInDOM(selector: string): R;
    }
  }
}

expect.extend({
  toNotBeInDOM: (received: ReactWrapper, selector: string) => {
    const $ = cheerio.load(received.html());

    if ($.html(selector)) {
      return {
        message: colors.green(`${received.name()} is not present in the DOM.`),
        pass: true
      };
    } else {
      return {
        message: colors.red(`${received.name()} is present in the DOM.`),
        pass: false
      };
    }
  }
});
