const { validateForm } = require('../src/index');

describe('validateForm feature testing', () => {
  test('Expect validateForm to not be null', () => {
    const formValidation = validateForm;
    expect.anything(formValidation);
  });

  test('Expect validateForm contain a function not an array', () => {
    const formValidation = validateForm;
    expect.not.arrayContaining(formValidation);
  });

  test('Expect validateForm not to be an integer', () => {
    const formValidation = validateForm;
    expect(formValidation).not.toEqual(5);
  });
});