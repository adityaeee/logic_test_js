function birthdayCakeCandles(candles) {
  // cari caldles terbanyak
  let max = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }
  // console.log(max)
  // hitung jumlah muncul
  let value = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      value++;
    }
  }
  console.log(value);
}

arr = [3, 1, 2, 3];
birthdayCakeCandles(arr);

// const arr = [1, 2, 2, 4, 5, 6];

// const insert = (arr, start, removed, ...items) => {
//   const item = items;
//   let j =0;
//   if (start < 0) start = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i == start) {
//         if (item.length != 0) {
//             if (removed != 0) {
//                 arr.at(i) = item.at(j)
//                 j++
//             }else {
//                 arr.push()
//             }

//         }
//     }
//   }
// };

// insert(arr, 2, 1, 3, 3, 3);

// arr.at(0);
// console.log(arr);
