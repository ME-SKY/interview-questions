/*
 Типы данных в JS
*/

// Примитивные типы данных - это отдельные значения, которые не могут быть изменены

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Непримитивные типы данных - это значения, которые могут быть изменены, object

// Array
// Object
// Function

// main difference between primitive and non-primitive types is that primitive types are immutable, while non-primitive types are mutable

// one of the most common pitfalls is that strings, numbers and booleans are primitives, but arrays and objects are not
// for example, when you pass an array or an object to a function, it is passed by reference, not by value
// so, if you change the array or the object inside the function, the changes will be reflected outside the function

// another pitfall is that when you compare two objects or two arrays, the comparison is done by reference, not by value
// so, if you compare two objects or two arrays, and the objects or arrays are different, but have the same values, the comparison will return false

// also, null and undefined are two different types of data, and they are not the same thing
// null is a primitive type that represents the intentional absence of any object value
// undefined is a primitive type that represents an uninitialized variable or a non-existent property

// finally, symbols are a new type of data that was introduced in ES6
// symbols are unique identifiers that can be used as keys in objects
// symbols are immutable, and they can be used to hide properties from the outside world


/* Строго говоря любые составные типа данных это тип объект, 
то есть Function - это объект типа function, Array - это объект типа array  
*/