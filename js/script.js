function multiplicity (arr) {
    let newArr = [],
        length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] != 0 && arr[i] % 3 == 0 && arr[i] % 5) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};



function pascalTriangle () {
        let arr = [];
    //     let i, j;
        let length = arr.length;
     
        for(let i = 1; i <= length ; i++){
            arr[i] = 0;
        };
     
        arr[0] = 1;

        for(let j = 1; j <= length; j++){
            for(let i = j; i >= 1 ; i--){
                console.log(arr[i-1]);
                arr[i] = arr[i-1] + arr[i];
            }
        }
        for(let i = 0; i <= length ; i++){
            console.log(arr[i]);
        }
     
};
    
pascalTriangle();

module.exports = multiplicity;
module.exports = pascalTriangle;


