import operate from '../components/logic/operate';

describe('operate js testing', () => {
  it('perform correct addition', () => {
    expect(operate('5', '7', '+')).toBe('12');
  });

  it('perform correct subtraction', () => {
    expect(operate('9', '4', '-')).toBe('5');
  });

  it('perform correct multiplication', () => {
    expect(operate('9', '4', 'x')).toBe('36');
  });

  it('perform correct division', () => {
    expect(operate('9', '4', 'x')).toBe('36');
  });

  it('perform correct modulo operation', () => {
    expect(operate('20', '3', '%')).toBe('2');
  });

  it('throws an error when trying to perform modulo operation by 0', () => {
    expect(operate('12', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });

  it('throws an error when trying to divide by 0', () => {
    expect(operate('12', '0', '÷')).toBe('Can\'t divide by 0.');
  });
});
