import * as React from "react";
import combos from "combos";
import { css } from "react-emotion";
import { colors, constants, mixins, typography } from "../src/theme";
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babylon";
import Highlight from "react-highlight";
import entries from "just-entries";

const wrapper = css({
  width: "100vw",
  minHeight: "100vh",
  padding: 30,
  paddingTop: 110
});

const sectionWrapper = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "30px 0",
  "> div": {
    flex: 1,
    margin: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: constants.borderRadius,
    backgroundColor: colors.white.base,
    border: constants.border.light
  },
  code: {
    fontFamily:
      '"Operator Mono", "Fira Code Retina", "Fira Code", FiraCode-Retina, "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
    fontWeight: 500,
    fontSize: 14
  },
  ".componentWrapper": {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    display: "flex"
  },
  ".codeWrapper": {
    display: "flex",
    flex: 1,
    padding: 30,
    backgroundColor: "#f8f8f8",
    borderLeft: constants.border.light
  }
});

const header = css({
  height: 80,
  ...mixins.flexSpaceBetween,
  position: "fixed",
  boxShadow: constants.boxShadow.base,
  zIndex: 999,
  width: "100%",
  backgroundColor: colors.white.base,
  padding: "0 30px",
  alignItems: "center"
});

function getJSXSource(componentName: string, props: any) {
  const _entries = entries(props);
  let jsxProps = _entries.reduce(
    (acc, entry) =>
      (acc += `${entry[0]}={${
        typeof entry[1] === "string" ? `"${entry[1]}"` : entry[1]
      }} `),
    ""
  );
  return prettier.format(`<${componentName} ${jsxProps}></${componentName}>`, {
    parser: "babylon",
    plugins: [babylon]
  });
}

const Combinations = ({
  Component,
  props,
  groupProps,
  randomProps,
  children,
  titleExtractor
}: {
  Component: any;
  props: any;
  groupProps: any;
  randomProps: any;
  children: any;
  titleExtractor?: (item: any) => any;
}) => {
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
      />
      <header className={header}>
        <h1 style={typography.xll.bold}>{Component.name}</h1>
      </header>
      <div className={wrapper}>
        {combos(groupProps).map(groupProp => (
          <div>
            <h4 style={{ ...typography.l.light, textTransform: "capitalize" }}>
              {titleExtractor
                ? titleExtractor(groupProp)
                : JSON.stringify(groupProp)}
            </h4>
            <div className={sectionWrapper}>
              {combos(randomProps).map(prop => {
                const _props = {
                  ...props,
                  ...groupProp,
                  ...prop
                };
                return (
                  <React.Fragment>
                    <div>
                      <div className="componentWrapper">
                        <Component {..._props}>{children}</Component>
                      </div>

                      <div className="codeWrapper">
                        <Highlight className="jsx">
                          {getJSXSource(Component.name, _props)}
                        </Highlight>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Combinations;
