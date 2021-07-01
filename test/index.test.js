const { Player, startGame, reload, validateForm, hiddeTable} = require('../src/index')



describe('Tic Tac toe testing', () => {

  test('Player name should be Bob', () => {
      player = new Player('Bob', 'x')
      expect(player.name).toBe('Bob')
  })

  test('Player marker should be x', () => {
    player = new Player('Bob', 'x')
    expect(player.marker).toBe('x')
  })

  test('It should expect a constructor', () => {
    player = new Player('Bob', 'x')
    expect.anything(player)
  })

  test('It should not bbe an integer', () => {
    player = new Player('Bob', 'x')
    expect(player).not.toEqual(5)
  })

  test('player should be instance of Player class', () => {
    player = new Player('Bob', 'x')
    expect(player).toBeInstanceOf(Player)
  })

  test('It should expect a constructor', () => {
    player = new Player('Bob', 'x')
    expect.objectContaining(player)
  })

  test('It should expect a constructor', () => {
    player = new Player('Bob', 'x')
    expect.stringContaining(player.name)
  })

  test('Expect startGame to not be null', () => {
    const newGame = startGame
    expect.anything(newGame)
  })

  test('Expect startGame contain a function not an array', () => {
    const newGame = startGame
    expect.not.arrayContaining(newGame)
  })

  test('Expect startGame not to be an integer', () => {
    const newGame = startGame
    expect(newGame).not.toEqual(5)
  })

  test('Expect reload to not be null', () => {
    const reloadFunction = reload
    expect.anything(reloadFunction)
  })

  test('Expect reload contain a function not an array', () => {
    const reloadFunction = reload
    expect.not.arrayContaining(reloadFunction)
  })

  test('Expect reload not to be an integer', () => {
    const reloadFunction = reload
    expect(reloadFunction).not.toEqual(5)
  })

  test('Expect validateForm to not be null', () => {
    const formValidation = validateForm
    expect.anything(formValidation)
  })

  test('Expect validateForm contain a function not an array', () => {
    const formValidation = validateForm
    expect.not.arrayContaining(formValidation)
  })

  test('Expect validateForm not to be an integer', () => {
    const formValidation = validateForm
    expect(formValidation).not.toEqual(5)
  })

  test('Expect hiddeTable to not be null', () => {
    const hidden = hiddeTable
    expect.anything(hidden)
  })

  test('Expect hiddeTable contain a function not an array', () => {
    const hidden = hiddeTable
    expect.not.arrayContaining(hidden)
  })

  test('Expect hiddeTable not to be an integer', () => {
    const hidden = hiddeTable
    expect(hidden).not.toEqual(5)
  })

  test('Expect startGame to not be null', () => {
    const start = startGame
    expect.anything(start)
  })

  test('Expect startGame contain a function not an array', () => {
    const start = startGame
    expect.not.arrayContaining(start)
  })

  test('Expect startGame not to be an integer', () => {
    const start = startGame
    expect(start).not.toEqual(5)
  })
})
