const sum = require('./sum');


test('sumo 2 y 2 y debe ser 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('sumo 1 y 3 y debe ser 4', () => {
    expect(sum(1, 3)).toBe(4);
  });

  test('sumo 9 y 0 y debe ser 9', () => {
    expect(sum(9, 0)).toBe(9);
  });

  test('sumo 6 y 2 y debe ser 8', () => {
    expect(sum(6, 2)).toBe(8);
  });


