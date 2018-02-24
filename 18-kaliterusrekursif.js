//  Exercise 18 Week 4 Case 'Kali Terus Rekursif'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function kaliTerusRekursif(angka) {
    let strAngka = angka.toString();
    let arrAngka = [];
    let resCalc = [];
    let res = Number(strAngka[strAngka.length-1]);

    for (let i=0; i<strAngka.length; i++) {
        arrAngka.push(+strAngka.charAt(i));
    }


    if (arrAngka.length === 1) {
        return Number(arrAngka);
    } else {
        var newAngka = arrAngka.slice(0, arrAngka.length-1);
        var angkaToString = newAngka.toString();
        var newAngkaString = '';

        for (var j=0; j<angkaToString.length; j++) {
            if (angkaToString[j] === ',') {
            } else {
                newAngkaString = newAngkaString + angkaToString[j];
            }
        }

        var calc = res * kaliTerusRekursif(newAngkaString);

        if (calc >= 10) {
            return kaliTerusRekursif(calc);
        } else {
            return calc;
        }
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
