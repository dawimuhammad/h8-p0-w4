//  Exercise 17 Week 4 Case 'Total Digit Rekursif'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function totalDigitRekursif(angka) {
    // variabel stringAngka untuk menampung angka dalam bentuk string
    var stringAngka = angka.toString(10).split('');

    // inisialisasi awal variabel res dengan angka terakhir
    var res = Number(stringAngka[stringAngka.length-1]);

    // memulai proses rekursif dengan mengkondisikan apabila rekursif sampai pada angka terakhir akan mengembalikan nilai terakhir tersebut
    if (stringAngka.length === 1) {
      return Number(stringAngka);
    } else {
        // proses slice untuk menjadi params rekursif
        var newAngka = stringAngka.slice(0, stringAngka.length-1);
        var angkaToString = newAngka.toString();
        // variabel newAngkaString akan menjadi params fungsi rekursif dalam bentuk yang dapat diproses
        var newAngkaString = '';

        // proses menghapus koma setelah transform array ke string
        for (var j=0; j<angkaToString.length; j++) {
            if (angkaToString[j] === ',') {
            } else {
                newAngkaString = newAngkaString + angkaToString[j];
            }
        }

        // pengembalian nilai penjumlahan dan rekursi
        return res + totalDigitRekursif(newAngkaString);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
