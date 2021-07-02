const { Player } = require('../src/index');

describe('Player constructor testing', () => {
  test('Player name should be Bob', () => {
    const player = new Player('Bob', 'x');
    expect(player.name).toBe('Bob');
  });

  test('Player marker should be x', () => {
    const player = new Player('Bob', 'x');
    expect(player.marker).toBe('x');
  });

  test('It should expect a constructor', () => {
    const player = new Player('Bob', 'x');
    expect.anything(player);
  });

  test('It should not bbe an integer', () => {
    const player = new Player('Bob', 'x');
    expect(player).not.toEqual(5);
  });

  test('player should be instance of Player class', () => {
    const player = new Player('Bob', 'x');
    expect(player).toBeInstanceOf(Player);
  });

  test('It should expect a constructor', () => {
    const player = new Player('Bob', 'x');
    expect.objectContaining(player);
  });

  test('It should expect a constructor', () => {
    const player = new Player('Bob', 'x');
    expect.stringContaining(player.name);
  });
});
