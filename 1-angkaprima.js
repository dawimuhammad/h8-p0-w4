// Exercise 1 Week 4 Case 'Angka Prima'
// by Muhamad Haddawi Hermawan Hacktiv8 Phase 0 Quantum Fox

function angkaPrima(angka) {
    for (i = 2; i < angka; i++) {
        if (angka%i === 0) {
            return false;
        }
    }

    return angka>1;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
