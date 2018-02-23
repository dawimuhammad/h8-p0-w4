//  Exercise 5 Week 4 Case 'Mengubah Kata'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function ubahHuruf(kata) {
    var abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var i=0;
    var kataBaru = '';

    for (i; i<kata.length; i++) {
        var j = 0;
        for(j; j<abjad.length; j++) {
            if (kata.charAt(i) === abjad[j]) {
                kataBaru = kataBaru + abjad[j+1];
                j = abjad.length;
            }
        }
    }

    return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
