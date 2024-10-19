//Strings :-

//There are the two ways of declaring strings

//first one :-
// const string = "hello           ";

//Second :-
let string2 = new String("          Ankit Singh      ");


// console.log(typeof string); // In first type of initializing its type come out as string 
console.log(typeof string2);//  In first type of initializing its type come out as object

//length is a property and property does'nt reauire () and its tells number of character+whitespaces  in string 
// console.log(string2.length);

//charCodeAt methods return character in string like charAt but changing alphabets into its ascii value 
// console.log(string2.charCodeAt(2))

console.log(string2.length)

//trim method in string
console.log(string2.trim()) // it remove the whitespace from start and ending both side 
console.log(string2.trimEnd()) // it remove the whitespace from ending side 
console.log(string2.trimStart()) // it remove the whitespace from start side 
string2 = string2.trimStart();

console.log(string2.replace("A","B"));// i replace function we have to pass two arguments first one is search value and second one is to be replaced 
console.log(string2.replace(/n/g,"absd"))
console.log(Number(string2))
