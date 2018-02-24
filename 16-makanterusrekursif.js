//  Exercise 16 Week 4 Case 'Makan Terus Rekursif'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function makanTerusRekursif(waktu) {
    // inisialisasi variabel penghitung pesanan costumer dengan angka awal 0;
    var count = 0;

    // kondisi apabila waktu telah habis akan mengembalikan nilai 0
    if (waktu === 0) {
        return count;
    } else if (waktu > 0 && waktu < 16) { // apabila waktu masih 15 menit akan mengembalikan nilai 0
        return 1;
    } else { // selain dari itu akan menambahkan nilai 1 setiap pemesanan dan mengurangi waktu sebanyak 15 menit
        count += 1;
        return count + makanTerusRekursif(waktu-15);
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
