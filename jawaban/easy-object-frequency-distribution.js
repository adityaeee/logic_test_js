/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
*/

const getFrequencies = (array) => {
  const result = [];
  let flag;
  for (let i = 0; i < array.length; i++) {
    flag = false;
    for (let j = 0; j < result.length; j++) {
      if (array[i] == result[j]) {
        flag = true;
      }
    }
    if (flag == false) {
      result.push(array[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      if (result[i] == array[j]) {
        sum++;
      }
    }
    console.log(`"${result[i]}" : ${sum}`);
  }
};

const array = ["A", "B", "A", "A", "B", "C", "A", "A", "B", "C", "A", "B", "C"];
getFrequencies(array);
