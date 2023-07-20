# jawaban-ProblemSolving-test

##no. 3
kompleksitas dari kodingan no.3 yang saya buat, menurut saya tingkat kompleksitasnya cukup rendah karena tidak terlalu banyak perulangan dan kompleksitasnya juga tergantung dari inputan user, adapun detail perhitungannya sebagai berikut : 
- kompleksitas waktu
jika dihitung dari kompleksitas waktu, dimana iterasi yang saya buat itu mengacu pada parameter str dimana nilai nya tidak teratur atau bisa disebut dengan nilai n dimana n mengacu pada panjangnya string yang dimasukan, karena parameter str bernilai n maka proses push dan pop pada array juga akan memiliki nilai n-kali, serta operasi perbandingan dan kondisional pun juga akan dilakukan sebanyak n-kali, maka dari itu bisa kita hitung total kompleksitas waktu kodingan yang saya buat adalah O(n).
- kompleksitas ruang
begitu juga untuk kompleksitas ruang, karena fungsi isBalanced yang dibuat itu tergantung dari parameter str yang diinputkan, dengan kasus terburuk penyimpanan finalArr akan berisi setengah panjang string str, Dalam hal ini, ruang yang digunakan adalah O(n/2), tetapi dalam notasi Big O kita mengabaikan konstanta dan faktor konstan, sehingga kompleksitas ruang adalah O(n).
