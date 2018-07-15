import { injectGlobal } from "react-emotion";
import { initGlobalStyles } from "./icons";

export function initStyles() {
  initGlobalStyles();

  injectGlobal`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: "Anarock", sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		
		.mb-10 {
			margin-bottom: 10px;
		}
		
		.ml-10 {
			margin-left: 10px;
		}
		
		.mt-10 {
			margin-top: 10px;
		}
`;
}
