export const shortenStringFormatter = (str: string): string => {
  if (str.length <= 10) {
    return str;
  }

  const prefix = str.slice(0, 6);
  const suffix = str.slice(-4);

  return `${prefix}...${suffix}`;
};
