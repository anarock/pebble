import { injectGlobal } from "react-emotion";

/**
 * Loads local fonts
 * @param name Font name
 * @param src font file name
 * @param fontWeight
 * @param fontStyle
 */
export function fontFace(
  name: string,
  src: string,
  fontWeight: string = "normal",
  fontStyle: string = "normal"
): string {
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require("./fonts/" + src + ".eot")});
          src: url(${require("./fonts/" +
            src +
            ".eot")}?#iefix) format("embedded-opentype"),
               url(${require("./fonts/" + src + ".woff")}) format("woff"),
               url(${require("./fonts/" + src + ".woff2")}) format("woff2"),
               url(${require("./fonts/" + src + ".ttf")}) format("truetype"),
               url(${require("./fonts/" + src + ".svg")}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

export function initStyles(): void {
  injectGlobal`
    ${fontFace("Anarock", "anarock-regular", "normal")}
    ${fontFace("Anarock", "anarock-medium", "bold")}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Anarock",sans-serif;
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
