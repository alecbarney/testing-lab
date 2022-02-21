
const {returnTwo, add, greeting, multiply, divide, subtract} = require('./functions.js')

test("returnsTwo should return two", ()=>{
    let result = returnTwo()
    expect(result).toBe(2)
})

test('this test should print hello with users name', ()=>{
    let greetings = greeting('Alec')
    expect(greetings).toBe('Hello Alec')
})

describe('math functions', ()=>{
    test('add function should return sum of numbers', ()=>{
        let sum = add(1, 4)
        expect(sum).toBe(5)
    })

    test('should subtract the numbers', ()=>{
        let sum = subtract(5,4)
        expect(sum).toBe(1)
    })

    test('should multiply the numbers', ()=>{
        let sum = multiply(2,2)
        expect(sum).toBe(4)
    })
    test('should divide the two numbers', ()=>{
        let sum = divide(100, 10)
        expect(sum).toBe(10)
    })
})