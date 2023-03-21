import { Component } from "react";
import { TextProps } from "react-native";

<% const iconNames = Object.keys(JSON.parse(glyphMap)) %>
export type IconName = <%= iconNames.map(icon => `"${icon}"`).join(" | ") %>;

export interface IconProps extends TextProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default class Icon extends Component<IconProps> {}
