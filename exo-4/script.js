// you can write js here
console.log('exo-4');


// travail sur une copie et afficher les deux en fin
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
var temp = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//let temp = secretMessage; // PAR REF !!!

console.log(temp);


//1
temp.pop(); //remove from the end
console.log(temp);

//2
//add two elements on this array
temp2 = temp.push('to', 'program');
console.log(temp);


//3 remplace l'element selectionné par un autre
temp[temp.indexOf('easily')] = 'right';
console.log(temp);

//4 supprime le premier element
temp.shift();
console.log(temp);

//5 ajoute un element à la premiere place
temp.unshift('Programming');
console.log(temp);

//6
temp = removeFromArr(elRemove,temp);
console.log(temp);

//7
console.log(secretMessage.join());
console.log(temp.join());