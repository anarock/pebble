function getShortenedNumber(num: number, toFixed: number = 1): string {
  if (!num) return;
  let formattedNum: string;
  if (num >= 10000000) {
    formattedNum = (num / 10000000).toFixed(toFixed) + " Cr";
  } else if (num >= 100000) {
    formattedNum = (num / 100000).toFixed(toFixed) + " L";
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(toFixed) + " K";
  } else {
    formattedNum = `${num.toFixed(toFixed)}`;
  }
  return formattedNum;
}

export default {
	getShortenedNumber
}
