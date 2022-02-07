
const { returnTwo, greeting, add, multiply, divide, subtract} = require('./function')

 test('return should return two', () =>{
     expect(returnTwo()).toEqual(2)
 })

 test('name test', () =>{
    //  expect(greeting('James')).toEqual('Hello, James')
     expect(greeting('Jill')).toEqual('Hello, Jill')
 })



 describe('Math functions', () =>{


 test('add test', () =>{
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
 })

 test('multiply test', () =>{
     expect(multiply(1, 1)).toEqual(1)
     expect(multiply(5, 5)).toEqual(25)
 })

 test('divide test', () =>{
    expect(divide(11, 11)).toEqual(1)
    expect(divide(100, 2)).toEqual(50)
})

test('subtract test', () =>{
    expect(subtract(200, 200)).toEqual(0)
    expect(subtract(10, 2)).toEqual(8)
}) 
})