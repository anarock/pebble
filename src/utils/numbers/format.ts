export function getShortenedNumber(
  num?: number | null,
  toFixed: number = 1
): string | undefined {
  let formattedNum: string;
  if (!num && num !== 0) {
    return;
  }

  if (num >= 10000000) {
    formattedNum = (num / 10000000).toFixed(toFixed) + " Cr";
  } else if (num >= 100000) {
    formattedNum = (num / 100000).toFixed(toFixed) + " L";
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(toFixed) + " K";
  } else if (num !== Math.floor(num)) {
    // has decimal part
    formattedNum = `${num.toFixed(toFixed)}`;
  } else {
    formattedNum = `${num}`;
  }
  return formattedNum;
}
