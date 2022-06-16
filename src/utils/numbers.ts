export const randomNumber = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const commaDelimited = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const compareNumbers = (key: string) =>
  (a: any, b: any) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0

export const genRanHex = (size: number) =>
  [...Array(size)].map(() =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');