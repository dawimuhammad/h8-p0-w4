//  Exercise 4 Week 4 Case 'Mengubah Kata'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function urutkanAbjad(str) {
    var abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var indexAbjad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    var newStr = [];
    var i=0;

    for (i; i<str.length; i++) {
        for (var j=0; j<abjad.length; j++) {
            if (str[i] === abjad[j]) {
                newStr.push(indexAbjad[j]);
            }
        }
    }

    var res = [];

    for (i=0; i<newStr.length; i++) {
        var value1 = newStr[i];
        var value2 = newStr[i+1];

        newStr.sort(function(value1, value2) { return value1 > value2 }); }

        for (i=0; i<newStr.length; i++) {
            for (j=0; j<indexAbjad.length; j++) {
                if (newStr[i] === indexAbjad[j]) {
                    res.push(abjad[j]);
                }
            }
    }

    var result = res.toString();
    var sortedStr = '';
    for (i=0; i<result.length; i++) {
        if (result[i] !== ',') {
            sortedStr = sortedStr + result[i];
        }
    }

    return sortedStr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'