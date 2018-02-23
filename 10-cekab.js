//  Exercise 10 Week 4 Case 'Cek Huruf A dan B Pada String'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function checkAB(num) {
    var i=0;
    var indeksAB = 0;
    for (i; i<num.length; i++) {
        var character = num[i];
        if (character === 'a' || character === 'b') {
            indeksAB = i;
            break;
        }
    }

    var j = indeksAB+4;

    if (character === 'a' && num[j] === 'b') {
        return true;
    } else if (character === 'b' && num[j] === 'a') {
      return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
