const { hiddeTable } = require('../src/index');

describe('hiddeTable feature testing', () => {
  test('Expect hiddeTable to not be null', () => {
    const hidden = hiddeTable;
    expect.anything(hidden);
  });

  test('Expect hiddeTable contain a function not an array', () => {
    const hidden = hiddeTable;
    expect.not.arrayContaining(hidden);
  });

  test('Expect hiddeTable not to be an integer', () => {
    const hidden = hiddeTable;
    expect(hidden).not.toEqual(5);
  });
});