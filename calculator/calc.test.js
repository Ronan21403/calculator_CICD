require('jest');
const solve_aux = require('./evaluation.js');

test('1+1=2', () => {
    expect(solve_aux(1 + 1)).toBe(2);
}
);