//map var olan diziyi değiştirmez, üstüne ekler.

const numbers = [1,2,3,4];
const squared = numbers.map(num => num ** 2);
console.log (squared)

//filter = ortjinal diziyi değiştirmez, koşul true dönerse eleman yeni diziye eklenir.

const number = [10,20,30,40];
const greaterThanTwenty = number.filter(num => num > 20);
console.log(greaterThanTwenty);

// reduce = amacı diziyi tek bir değere indirmek için kullanılır. Toplama, çarpma gibi işlemler yapmak için idealdir.

const number1 = [1,2,3,4];
const sum = numbers.reduce((total,num) => total + num, 0);
console.log(sum)

//forEach = Dizi elemanları üzerinde gezinmek için kullanılır.

const numbers1 = [1,2,3,4];

numbers1.forEach(num => console.log(num * 2));