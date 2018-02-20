function fpb(angka1, angka2) {
  // Variable initialization
  var i = 1;
  var faktorAngka1 = [];
  var faktorAngka2 = [];
  var fpb = [];

  for (i; i<angka1; i++) {
      if (angka1%i === 0) {
          faktorAngka1.push(i);
      }
  }

  for (i=0; i<angka2; i++) {
      if (angka2%i === 0) {
          faktorAngka2.push(i);
      }
  }

  function insertFpb(array1, array2) {
     // Variable initialization to collect the result of FPB
     var result = [];

     var a = array1.slice(0);
     var b = array2.slice(0);

     var aLast = a.length - 1;
     var bLast = b.length - 1;
     while (aLast >= 0 && bLast >= 0) {
        if (a[aLast] > b[bLast] ) {
           a.pop();
           aLast--;
        } else if (a[aLast] < b[bLast] ){
           b.pop();
           bLast--;
        } else /* they're equal */ {
           result.push(a.pop());
           b.pop();
           aLast--;
           bLast--;
        }
     }
      return result[0];
  }


  if (faktorAngka1.length > faktorAngka2.length) {
      fpb = insertFpb(faktorAngka1, faktorAngka2);
  } else {
      fpb = insertFpb(faktorAngka2, faktorAngka1);
  }

  return fpb;

}

// TEST CASES

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
