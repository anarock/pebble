import * as React from "react";
import { LogoProps } from "./typings/Logo";

const Logo: React.FunctionComponent<LogoProps> = ({
  height = 40,
  color = "#000000"
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={height}
      viewBox="0 0 655.35 175.08"
      xmlSpace="preserve"
      style={{ fill: color }}
    >
      <path
        className="st0"
        d="M168.92 65.96l-66.1-64.85v100.61h17.39V40.78l66.11 64.56V4.73h-17.4v61.23zm446.77-18.51L653.4 4.73h-20.6l-41.04 46.48V4.73h-17.4v96.99h17.4V73.34L604 59.84l30.19 41.88h20.33l-38.83-54.27zM422.66 2.92c-27.78 0-50.31 22.53-50.31 50.31s22.52 50.3 50.31 50.3c27.78 0 50.3-22.52 50.3-50.3s-22.52-50.31-50.3-50.31zm0 84.84c-19.05 0-34.54-15.49-34.54-34.53s15.49-34.54 34.54-34.54c19.04 0 34.54 15.49 34.54 34.54 0 19.04-15.5 34.53-34.54 34.53zM0 101.72h18.38L27 82.93h41.75l8.63 18.79h18.51L48.02 0 0 101.72zM33.55 67.9l14.32-31.58L62.21 67.9H33.55zm159.61 33.82h18.37l8.62-18.79h41.75l8.62 18.79h18.51L241.16 0l-48 101.72zm33.53-33.82l14.33-31.58 14.33 31.58h-28.66zm138.43-32.42c0-8.76-3.07-16-9.19-21.84-6.12-5.99-13.5-8.91-22.26-8.91h-37.71v96.99h17.4V67.21h17.25l20.73 34.51h19.62l-23.51-38.68c10.57-4.46 17.67-14.89 17.67-27.56zm-33.25 16.15h-18.51V20.46h19.9c8.34 0 14.6 6.4 14.6 15.31 0 9.32-6.54 15.86-15.99 15.86zm197.61-32.94c9.22 0 17.9 3.59 24.42 10.12l11.15-11.15c-9.82-9.83-22.7-14.74-35.57-14.74-12.87 0-25.75 4.91-35.56 14.74-19.65 19.64-19.65 51.49 0 71.14 9.82 9.82 22.69 14.73 35.56 14.73 12.87 0 25.75-4.91 35.57-14.73L553.9 77.65c-6.52 6.52-15.2 10.11-24.42 10.11-9.23 0-17.89-3.59-24.42-10.11-13.46-13.46-13.46-35.37 0-48.84 6.53-6.52 15.2-10.12 24.42-10.12z"
      />
      <rect
        y="123.84"
        className="st1"
        width="654.52"
        height="4.26"
        id="XMLID_9_"
      />
      <path
        className="st0"
        d="M90.05 150.11h6.02l6.48 17.46 6.48-17.46h5.88l-10.02 24.97h-4.81l-10.03-24.97zm39.59-.17h5.03l10.63 24.97h-5.7l-2.28-5.56h-10.47l-2.27 5.56h-5.56l10.62-24.97zm5.75 14.59l-3.3-8.04-3.29 8.04h6.59zM154 150.11h5.46v19.83h12.36v4.96H154v-24.79zm36.79 25.18c-3.33 0-5.95-.92-7.86-2.76-1.91-1.83-2.87-4.59-2.87-8.25v-14.16h5.46v14.02c0 2.03.46 3.56 1.41 4.58.94 1.03 2.26 1.54 3.93 1.54 1.68 0 2.98-.49 3.93-1.49.95-.99 1.42-2.48 1.42-4.46v-14.2h5.46v13.99c0 1.88-.26 3.53-.77 4.92-.51 1.39-1.23 2.55-2.17 3.49-.95.93-2.08 1.63-3.44 2.08-1.35.47-2.85.7-4.5.7zm21.83-25.18h18.66v4.85H218v5.03h11.7v4.85H218v5.2h13.46v4.86h-18.84v-24.79zm37.74 25.15c-1.89 0-3.75-.33-5.57-.98-1.82-.65-3.47-1.64-4.94-2.99l3.21-3.86c1.14.92 2.3 1.65 3.49 2.19 1.2.54 2.51.82 3.91.82 1.13 0 2.01-.21 2.64-.62.63-.41.94-.99.94-1.72v-.07c0-.36-.07-.67-.19-.94-.14-.27-.39-.53-.75-.77-.36-.23-.87-.47-1.52-.71s-1.49-.48-2.53-.74c-1.26-.31-2.38-.64-3.4-1.03-1.01-.38-1.88-.84-2.59-1.4a5.85 5.85 0 0 1-1.65-2.07c-.38-.82-.58-1.86-.58-3.08v-.07c0-1.13.21-2.16.63-3.07.42-.91 1.01-1.7 1.78-2.35.76-.66 1.67-1.17 2.73-1.52 1.06-.35 2.23-.54 3.5-.54 1.83 0 3.5.28 5.02.82 1.52.54 2.92 1.32 4.19 2.34l-2.83 4.11c-1.1-.76-2.2-1.35-3.26-1.79-1.06-.44-2.12-.66-3.19-.66-1.06 0-1.85.21-2.38.62-.53.41-.8.93-.8 1.54v.07c0 .4.08.75.23 1.04.15.29.43.56.84.79.39.24.94.46 1.64.67.7.21 1.57.47 2.63.75 1.26.33 2.37.7 3.35 1.11.98.41 1.81.91 2.48 1.49.68.58 1.18 1.25 1.52 2.04.34.78.52 1.71.52 2.8v.07c0 1.22-.23 2.32-.67 3.27a6.71 6.71 0 0 1-1.86 2.41c-.81.65-1.76 1.14-2.87 1.48-1.11.37-2.33.55-3.67.55zm46.42.07c-1.92 0-3.68-.34-5.28-1.01-1.61-.67-3-1.58-4.16-2.72-1.17-1.15-2.08-2.5-2.73-4.04-.65-1.55-.98-3.2-.98-4.98v-.07c0-1.77.32-3.42.99-4.97a12.64 12.64 0 0 1 2.74-4.07c1.16-1.17 2.57-2.09 4.18-2.77 1.62-.67 3.39-1.01 5.3-1.01 1.91 0 3.67.34 5.28 1.01 1.61.68 2.99 1.59 4.16 2.73 1.16 1.14 2.07 2.49 2.73 4.04.64 1.54.97 3.21.97 4.98v.07c0 1.77-.33 3.43-.99 4.98-.67 1.55-1.57 2.9-2.74 4.07-1.17 1.17-2.56 2.08-4.18 2.76-1.61.66-3.37 1-5.29 1zm.08-5.03c1.08 0 2.09-.2 3.01-.6.92-.4 1.71-.95 2.35-1.66.65-.71 1.16-1.53 1.53-2.47.36-.93.54-1.93.54-2.99v-.07c0-1.06-.18-2.06-.54-3.01-.36-.94-.89-1.77-1.56-2.47a7.49 7.49 0 0 0-2.39-1.68c-.91-.41-1.93-.62-3.01-.62-1.11 0-2.12.21-3.03.6-.91.4-1.69.96-2.34 1.66a7.76 7.76 0 0 0-1.52 2.46c-.37.94-.55 1.94-.55 3v.07c0 1.06.18 2.07.55 3.02.36.94.88 1.76 1.55 2.47.67.71 1.47 1.27 2.38 1.68.91.4 1.91.61 3.03.61zm19.48-20.19h6.02l6.48 17.46 6.48-17.46h5.88l-10.02 24.97h-4.81l-10.03-24.97zm33.54 0h18.66v4.85h-13.28v5.03h11.68v4.85h-11.68v5.2h13.46v4.86h-18.84v-24.79zm29.16 0h11.34c3.13 0 5.54.83 7.22 2.51 1.42 1.42 2.12 3.31 2.12 5.67v.07c0 2.01-.49 3.65-1.47 4.91-.98 1.26-2.26 2.19-3.84 2.77l6.05 8.86h-6.37l-5.31-7.94h-4.3v7.94h-5.45v-24.79zm10.98 12.04c1.35 0 2.39-.32 3.1-.95.72-.64 1.08-1.48 1.08-2.54v-.07c0-1.17-.37-2.06-1.13-2.64-.75-.59-1.8-.88-3.15-.88h-5.42v7.08h5.52zm33.05-12.04h6.02l6.48 17.46 6.48-17.46h5.87l-10.02 24.97h-4.81l-10.02-24.97zm39.59-.17h5.02l10.63 24.97h-5.7l-2.26-5.56h-10.48l-2.27 5.56h-5.56l10.62-24.97zm5.73 14.59l-3.29-8.04-3.29 8.04h6.58zm18.62-14.42h5.46v19.83h12.36v4.96h-17.82v-24.79zm36.8 25.18c-3.34 0-5.95-.92-7.87-2.76-1.91-1.83-2.87-4.59-2.87-8.25v-14.16h5.46v14.02c0 2.03.47 3.56 1.42 4.58.95 1.03 2.26 1.54 3.93 1.54 1.67 0 2.99-.49 3.94-1.49.94-.99 1.41-2.48 1.41-4.46v-14.2h5.46v13.99c0 1.88-.26 3.53-.76 4.92-.51 1.39-1.24 2.55-2.18 3.49-.95.93-2.09 1.63-3.44 2.08-1.36.47-2.85.7-4.5.7zm21.82-25.18h18.67v4.85h-13.28v5.03h11.69v4.85h-11.69v5.2h13.46v4.86h-18.85v-24.79z"
      />
    </svg>
  );
};

export default Logo;
