/*
===
Equal or Not
===
Buatlah sebuah fungsi isEqual yang akan menerima input 2 buah objek. Fungsi ini akan mencari tahu apakah 2 buah objek tersebut termasuk equal atau tidak.

Syarat equal :
- memiliki jumlah key yang sama
- memiliki nama-nama key yang sama

HINT : hiraukan huruf kapital atau tidak, contoh nama key 'Name' dan 'name' dianggap sama
*/
// function isEqual(a, b) {
//   const keys1 = Object.keys(a).map((key) => key.toLowerCase());
//   const keys2 = Object.keys(b).map((key) => key.toLowerCase());

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   const set1 = new Set(keys1);
//   const set2 = new Set(keys2);

//   return (
//     [...set1].every((key) => set2.has(key)) &&
//     [...set2].every((key) => set1.has(key))
//   );
// }

const isEqual = (a, b) => {
  const keyA = [];
  const keyB = [];

  for (const key in a) {
    keyA.push(key);
  }
  for (const key in b) {
    keyB.push(key);
  }

  if (keyA.length !== keyB.length) {
    return false;
  }

  for (let i = 0; i < keyA.length; i++) {
    let keya = String(keyA.at(i));
    let keyb = String(keyB.at(i));

    if (keya.toLowerCase !== keyb.toLowerCase) {
      return false;
    }
    if (keya.length !== keyb.length) {
      return false;
    }
  }

  return true;
};

let a;
let b;

a = {
  foo: 1,
  bar: 2,
};

b = {
  Foo: 8,
  bAR: 100,
};

console.log(isEqual(a, b)); // true

a = {
  foo: 1,
  bar: 2,
  yeah: 9,
};

b = {
  Foo: 8,
  bAR: 100,
};

console.log(isEqual(a, b)); // false

a = {
  foo: 1,
  bar: 2,
};

b = {
  Foo: 8,
  bARe: 100,
};

console.log(isEqual(a, b)); // false
