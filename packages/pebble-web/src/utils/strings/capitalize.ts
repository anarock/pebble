export function capitalize(str: string): string {
  return str
    ? str
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : str;
}
