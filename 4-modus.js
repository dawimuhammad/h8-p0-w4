//  Exercise 4 Week 4 Case 'Mencari Modus'
//  by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QFox

function cariModus(arr) {
    var res = [];
    var i = 0;

    for (i; i<arr.length; i++) {
        var x = arr[i];
        //console.log('x :'+x);
        var j = 0;
        for (j; j<arr.length; j++) {
            var y = arr[j];
            //console.log('y :'+y);
            if (i === j) {
                // do nothing
            } else if (x === y) {
                res.push(x);
            }
        }
    }

    if (res.length === 0 || res.length > arr.length) {
        return -1;
    } else if (res.length >= 2) {
         return res[0];
    }

    return res;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
