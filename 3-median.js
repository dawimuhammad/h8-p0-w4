// Ecxercise 3 Week 4 Case 'Mencari Median'
// by Muhamad Haddawi Hacktiv8 Student Phase 0 Batch QuantumFox

function cariMedian(arr) {
    var arrLength = arr.length;
    var sumArr = 0;
    var median;

    //console.log(arrLength);
    for (var i=0; i<arrLength; i++) {
        sumArr = sumArr + arr[i];
    }

    if (arrLength%2 === 0) {
        median = (arr[(arrLength/2)]+arr[(arrLength/2)-1])/2;
    } else {
        median = arr[(arrLength-1)/2];
    }

    return median;
}
