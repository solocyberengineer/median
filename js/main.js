
let numbers = [12, 18, 11, 5, 8, 2];

function parseStringArr(string){
    let x = []
    let stringArr = string.split(',')
    for(let i = 0; i<stringArr.length; i++){
        console.log(stringArr[i])
        x.push( parseInt(stringArr[i]) )
    }
    return x;
}

function findMiddleArrayValue(arr){
    if( arr.length % 2 == 0 ){
        return [arr[(arr.length/2)-1], arr[arr.length/2]]
    } else {
        let midIndex = parseInt(arr.length/2)
        return [ arr[midIndex] ]
    }
}

let input = document.querySelector('[type="text"]');
let output = document.querySelector('[display="output"]')
let btn = document.querySelector('[type="button"]')

btn.onclick = function(){
    let x = parseStringArr(input.value);
    output.textContent = `[${findMiddleArrayValue( x )}]`
}