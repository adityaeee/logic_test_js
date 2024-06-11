/*
===
Rekap Jurusan
===
Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}

*/

const data = [
  {
    nama: "Adi",
    jurusan: "TI",
    nilai: 80,
  },
  {
    nama: "Bintang",
    jurusan: "Biologi",
    nilai: 70,
  },
  {
    nama: "Nanda",
    jurusan: "TI",
    nilai: 90,
  },
  {
    nama: "Rama",
    jurusan: "Elektro",
    nilai: 80,
  },
  {
    nama: "Reggi",
    jurusan: "TI",
    nilai: 100,
  },
  {
    nama: "Windy",
    jurusan: "Biologi",
    nilai: 100,
  },
];

const rekapData = (data) => {
  const rekapJurusan = {};

  for (let i = 0; i < data.length; i++) {
    let flag = true;

    for (let j = 0; j < rekapJurusan.length; j++) {
      if (data[i].jurusan == rekapJurusan[j]) {
        flag = false;
      }
    }

    if (flag == true) {
      rekapJurusan[data[i].jurusan] = { nama: [], "rata-rata": 0 };
    }
  }

  for (const key in rekapJurusan) {
    data.forEach((value) => {
      if (value.jurusan == key) {
        rekapJurusan[key].nama.push(value.nama);
        rekapJurusan[key]["rata-rata"] += value.nilai;
      }
    });

    rekapJurusan[key]["rata-rata"] =
      rekapJurusan[key]["rata-rata"] / rekapJurusan[key]["nama"].length;
  }

  return rekapJurusan;
};

console.log(rekapData(data));
