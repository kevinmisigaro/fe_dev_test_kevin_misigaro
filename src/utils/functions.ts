export const shortenString = (str: string, maxLength: number = 100): string => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};
