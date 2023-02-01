export function decimalToHex(decimal: number): string {
  let decimalStringify = decimal.toString(16);
  if (decimalStringify.length % 2 > 0) {
    decimalStringify = '0' + decimalStringify;
  }
  return decimalStringify;
}

export function addAlpha(hex: string, alpha: number): string {
  return `${hex}${decimalToHex(Math.round(alpha * 255))}`;
}
