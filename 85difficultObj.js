// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// Строка Dobermanбудет отображаться в консоли.

// Другой способ использования этой концепции — динамический сбор имени свойства во время выполнения программы следующим образом:

// const someObj = {
//   propName: "John"
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);
// somePropбудет иметь значение string propName, и строка Johnбудет отображаться в консоли.
// Setup
const testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
}

// Only change code below this line
const playerNumber = 16 // Change this line
const player = testObj[playerNumber] // Change this line
