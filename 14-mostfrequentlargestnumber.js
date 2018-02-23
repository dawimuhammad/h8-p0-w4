//  Exercise 14 Week 4 Case 'Most Frequent Largest Number'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function sorting(arrNumber) {
    // inisialisasi variabel numberSorted sebagai penampung input
    var numberSorted = arrNumber;

    // iterasi untuk melakukan sorting DESCENDING terhadap array input
    for (i=0; i<numberSorted.length; i++) {
        var num1 = numberSorted[i];
        var num2 = numberSorted[i+1];
        numberSorted.sort(function(num1, num2) { return num1 < num2 });
    }

    // mengembalikan array hasil sort
    return numberSorted;
}

function getTotal(arrNumber) {
    // inisialisasi variabel penampung angka tertinggi dan jumlah kemunculan angka tertinggi
    var highestNumber = 0;
    var countHighestNumber = 0;

    // kondisi ketika array kosong akan mengembalikan string/ hasil kosong
    if (arrNumber.length === 0) {
        return '';
    } else {
        // set variabel highestNumber untuk nilai tertinggi pada array dengan indeks pertama/ indeks 0 karena array telah di sort descending
        highestNumber = arrNumber[0];

        // set variabel countHighestNumber menjadi 1 setelah highestNumber pertama didapatkan
        countHighestNumber = 1;

        // iterasi untuk mencari nilai yang sama dengan highestNumber dan menambahkan 1 setiap ada kemunculan
        for (var j=1; j<arrNumber.length; j++) {
            if (arrNumber[j] === highestNumber) {
                countHighestNumber += 1;
            } else {
                break;
            }
        }
    }

    // mengembalikan string sesuai objective yang diinginkan
    return 'angka paling besar adalah '+highestNumber+' dan jumlah kemunculan sebanyak '+countHighestNumber+' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
