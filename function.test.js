
const { returnTwo, greeting, add} = require('./function')

 test('return should return two', () =>{
     expect(returnTwo()).toEqual(2)
 })

 test('name test', () =>{
    //  expect(greeting('James')).toEqual('Hello, James')
     expect(greeting('Jill')).toEqual('Hello, Jill')
 })

 test('add test', () =>{
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
 })