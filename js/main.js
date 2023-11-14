

let numbers = [12, 18, 11, 5, 8, 2];

function findMiddleArrayValue(arr){
    if( arr.length % 2 == 0 ){
        return [arr[(arr.length/2)-1], arr[arr.length/2]]
    } else {
        let midIndex = parseInt(arr.length/2)
        return [ arr[midIndex] ]
    }
}

let dout = document.querySelector("[display='output']");

dout.textContent = findMiddleArrayValue(numbers)