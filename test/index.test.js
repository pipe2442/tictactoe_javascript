const sum = require('../src/index')

describe('sum function', () => {
    test('sum 2 + 2 should be 4', () => {
        expect(sum(2, 2)).toBe(4)
    })
})










/* 


const cap = require('../src/index');

describe('capitalize function', () => {
  test('capitalize the first letter of the world javascript', () => {
    expect(cap('javascript')).toBe('Javascript');
  });

  test('User introduces integer instead of string', () => {
    expect(cap(2)).toBe('');
  });
});



*/