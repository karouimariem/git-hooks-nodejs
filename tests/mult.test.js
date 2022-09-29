const mult = require("../src/mult")

it('should return correct mult', () => {
    
    const rs = mult(5, 2)
    expect(rs).toBe(10)
});