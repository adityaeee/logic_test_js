const arr = [
  ["besok", 4],
  ["kita", 1],
  ["akan", 2],
  ["menyerang", 3],
  ["pagi", 5],
];

const susunPesan = (arr) => {
  let message = "";
  let length = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == length) {
      message = message + " " + arr[i][0];
      i = -1;
      length++;
    }
  }

  console.log(message);
};

susunPesan(arr);
