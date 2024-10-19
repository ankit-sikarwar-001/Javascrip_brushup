// Arrays 
 
// how to create an array and no. of ways 

//first
const arr = [1,2,3,4,5,6]
console.log(arr);

//second way of declaring an array 
const newarr = new Array(7,8,9,10,11)
console.log(newarr)

//length property 
console.log(arr.length)

//push operation add elements to last position of an array 
arr.push(12) 
arr.push(13)
arr.push(14) 

//pop operation remove  elements from last position of an array
arr.pop()//no argumet require 

//unshift and shift pending
console.log(arr.unshift(15)) //it will add element in the starting of an array 
console.log(arr.shift()) // it will remove element starting of the array

// difference between slice and splice 
console.log(arr.slice(1,3)) //Returns a copy of a section of an array. For both start and end.
console.log(arr)

//splice
console.log(arr.splice(1,3)) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr)









