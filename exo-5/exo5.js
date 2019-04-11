// you can write js here
console.log('exo-5');
let vowels = ['a','e','i','o','u'];
let input = prompt("Tape your text here : ").toLowerCase();
let resulArray = [];


resulArray = removeFromArr(vowels,input);
console.log(resulArray.join().toUpperCase());


function removeFromArr(ElementToRemove, arr){
    let resultArr = [];
    for (i = 0; i < arr.length;i++){
        if (ElementToRemove.indexOf(arr[i]) > -1){
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}




