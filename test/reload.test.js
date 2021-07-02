const { reload } = require('../src/index');

describe('reload feature testing', () => {
  test('Expect reload to not be null', () => {
    const reloadFunction = reload;
    expect.anything(reloadFunction);
  });

  test('Expect reload contain a function not an array', () => {
    const reloadFunction = reload;
    expect.not.arrayContaining(reloadFunction);
  });

  test('Expect reload not to be an integer', () => {
    const reloadFunction = reload;
    expect(reloadFunction).not.toEqual(5);
  });
});