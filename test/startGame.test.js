const { startGame } = require('../src/index');

describe('startGame feature testing', () => {
  test('Expect startGame to not be null', () => {
    const start = startGame;
    expect.anything(start);
  });

  test('Expect startGame contain a function not an array', () => {
    const start = startGame;
    expect.not.arrayContaining(start);
  });

  test('Expect startGame not to be an integer', () => {
    const start = startGame;
    expect(start).not.toEqual(5);
  });
});