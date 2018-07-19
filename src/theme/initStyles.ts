import { injectGlobal } from "react-emotion";
import { initIconStyles } from "./icons";

export function initStyles() {
  initIconStyles();

  injectGlobal`
	* {	
		margin: 0;	
		padding: 0;	
		box-sizing: border-box;	
		font-family: "Anarock", sans-serif;	
		-webkit-font-smoothing: antialiased;	
		-moz-osx-font-smoothing: grayscale;	
		-webkit-tap-highlight-color: transparent;
	}
`;
}
