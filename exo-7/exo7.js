console.log("exo-7");

addTraductionToNode();
console.log(jsonDatas);

function addTraductionToNode(){
    //console.log('enter');
     jsonDatas.forEach( (node) => {
         node.traduction= jsonTraduction[node.type];
     });
}






