jurusan = [
  ["Biologi", "Jonas"],
  ["Fisika", "Ulrich"],
  ["Akuntansi", "Hannah"],
  ["Biologi", "Barbosz"],
  ["Fisika", "Claudia"],
  ["Biologi", "Edmund"],
];

const kompilasi = (arr) => {
  const jurusan = {};

  for (let i = 0; i < arr.length; i++) {
    let flag = true;

    for (let j = 0; j < jurusan.length; j++) {
      if (arr[i][0] == jurusan[j]) {
        flag = false;
      }
    }

    if (flag == true) {
      jurusan[arr[i][0]] = [];
    }
  }

  Object.keys(jurusan).forEach((key) => {
    jurusan[key] = [];
    for (let i = 0; i < arr.length; i++) {
      if (key == arr[i][0]) {
        jurusan[key].push(arr[i][1]);
      }
    }
  });

  // Object.keys(jurusan).forEach((key) => {
  //   console.log(`${key}  : ${jurusan[key]}`);
  // });
  console.log(jurusan);
};

kompilasi(jurusan);
