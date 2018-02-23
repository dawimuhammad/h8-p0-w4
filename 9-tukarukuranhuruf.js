//  Exercise 9 Week 4 Case 'Tukar Ukuran Huruf Lowercase/Uppercase'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox


function tukarBesarKecil(kalimat) {
  // INISIALISASI VARIABEL LIBRARY ABJAD DAN INDEKS ABJAD
  var lowAbjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var upAbjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var indexAbjad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  var i = 0;

  var resultOfTransform = [];

  // FUNCTION MENGECEK HURUF LOWERCASE
  function isItLowercase(huruf) {
    for (let i=0; i<lowAbjad.length; i++) {
        if (huruf === lowAbjad[i]) {
            return true;
        }
    }
  }

  // FUNCTION MENGECEK HURUF UPPERCASE
  function isItUppercase(huruf) {
    for (let i=0; i<upAbjad.length; i++) {
        if (huruf === upAbjad[i]) {
            return true;
        }
    }
  }

  // MENGAMBIL HURUF DARI ARRAY KALIMAT DAN MELAKUKAN PENGECEKAN UP/LOW CASE
  for (i; i<kalimat.length; i++) {
      // find indexAbjad of kalimat[i]
      var character = kalimat[i];
      //console.log(character);
      if (isItUppercase(character) === true) {
          // check indeks abjad
          for (var j=0; j<upAbjad.length; j++) {
              if (character === upAbjad[j]) {
                  // transform to lowercase
                  resultOfTransform.push(lowAbjad[j]);
              }
          }
      } else if (isItLowercase(character) === true) {
          for (var k=0; k<lowAbjad.length; k++) {
              if (character === lowAbjad[k]) {
                  // transform to uppercase
                  resultOfTransform.push(upAbjad[k]);
              }
          }
      } else { // mengembalikan nilai kalimat[i] sesuai nilai asal
          resultOfTransform.push(kalimat[i]);
      }
    }

    // merubah array resToString ke dalam bentuk STRING
    var resToString = resultOfTransform.toString();
    var finalResult = '';

    // membuang setiap tanda koma hasil dari transform array ke string
    for (var m=0; m<resToString.length; m++) {
        if (resToString[m] !== ',') {
            finalResult += resToString[m];
        }
    }

    // mengembalikan hasil
    return finalResult;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
