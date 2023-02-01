import { addAlpha, decimalToHex } from '.';

describe('extractColors', () => {
  it('should extract hex values', () => {
    expect(addAlpha('#ffffff', 0.5)).toEqual('#ffffff80');

    expect(addAlpha('#ff0000', 0.5)).toEqual('#ff000080');

    expect(addAlpha('#00ff00', 0.3)).toEqual('#00ff004d');

    expect(addAlpha('#0000ff', 0.1)).toEqual('#0000ff1a');

    expect(addAlpha('#c08a4a', 0.9)).toEqual('#c08a4ae6');
  });
});

describe('decimalToHex', () => {
  it('should extract rgb values', () => {
    expect(decimalToHex(Math.round(0.5 * 255))).toEqual('80');

    expect(decimalToHex(Math.round(0.4 * 255))).toEqual('66');

    expect(decimalToHex(Math.round(0.3 * 255))).toEqual('4d');

    expect(decimalToHex(Math.round(0.1 * 255))).toEqual('1a');

    expect(decimalToHex(Math.round(0.9 * 255))).toEqual('e6');
  });
});
