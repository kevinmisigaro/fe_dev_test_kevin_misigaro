export const shortenString = (str: string, maxLength: number = 100): string => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

export const getInitials = (name?: string): string => {
  if (name == "") {
    return "";
  }
  return name!
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
