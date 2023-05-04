import calculate from '../components/logic/calculate';

describe('calculate js testing', () => {
  it('should add the operator clicked to the output string', () => {
    const btn = {
      total: '18',
      next: null,
      operation: null,
    };
    const output = calculate(btn, '+');
    expect(output).toEqual({
      total: '18',
      next: null,
      operation: '+',
    });
  });

  it('should clear the output string when AC is clicked', () => {
    const btn = {
      total: '18',
      next: '400',
      operation: 'x',
    };
    const output = calculate(btn, 'AC');
    expect(output).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
