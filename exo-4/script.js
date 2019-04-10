// you can write js here
console.log('exo-4');

function removeFromArr(ElementToRemove, arr){

    for (i = 0; i < arr.length;i++){
        if (ElementToRemove.indexOf(arr[i]) > -1){
            arr[i] = "know";
        }
    }

return arr;
}

var elRemove =['get', 'right', 'the', 'first', 'time,'];
var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

let temp = secretMessage;

console.log(secretMessage);


//1
secretMessage.pop(); //remove from the end
console.log(secretMessage);

//2
//add two elements on this array
temp = secretMessage.push('to', 'program');
console.log(secretMessage);


//3 remplace l'element selectionné par un autre
secretMessage[secretMessage.indexOf('easily')] = 'right';
console.log(secretMessage);

//4 supprime le premier element
secretMessage.shift();
console.log(secretMessage);

//5 ajoute un element à la premiere place
secretMessage.unshift('Programming');
console.log(secretMessage);

//6
secretMessage = removeFromArr(elRemove,secretMessage);
console.log(secretMessage);

//7
console.log(secretMessage.join());