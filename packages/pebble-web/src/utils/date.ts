export function dateToEpoch(date?: Date) {
  if (!date) {
    return date;
  }
  return Math.floor(date.getTime() / 1000);
}
