function changeMe(arr) {

    for (let i=0; i<arr.length; i++) {
        let avengers = {};

        for (let j=0; j<arr[i].length+1; j++) {
            if (j === 0) {
                console.log(i+1+'. '+arr[i][j]+' '+arr[i][j+1]+':');
                avengers.firstName = arr[i][j];
            } else if (j === 1) {
                avengers.lastName = arr[i][j];
            } else if (j === 2 ) {
                avengers.gender = arr[i][j];
            } else if (j === 3) {
                if (arr[i][j] !== undefined) {
                    avengers.age = 2018 - arr[i][j];
                } else {
                    avengers.age = 'Invalid Birth Year';
                }
            }
        }

        console.log(avengers);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
