/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.

Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong

Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

input = [1, 1, 1]
output :
Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong

input = [1, -2, 3, 0, 5]
output :
Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
*/

const kompilasiLaporan = (data) => {
  // console.log("🚀 ~ kompilasiLaporan ~ data:", data);
  let pembayaran = 0;
  let pajak = 0;
  let properti = 0;

  data.forEach((value) => {
    if (value > 0) {
      pembayaran += value;
    } else if (value == 0) {
      properti += 1;
    } else if (value < 0) {
      pajak += value;
    }
  });

  pembayaran = pembayaran * 100;
  pajak = pajak * -20;
  let message = `Tuan Postoro mendapat ${pembayaran} dollar, harus membayar pajak sebesar ${pajak} dollar, dan ada ${properti} komplek yang kosong`;
  return message;
};

console.log(kompilasiLaporan([1, -2, 3, 0, 5, -1, 0, 2, -1, 1, 0]));
