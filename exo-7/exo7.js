console.log("exo-7");

//console.log(jsonDatas);

/*
jsonDatas.forEach( (node) => {
    console.log(node.name);
});
*/
 /*
jsonTraduction.forEach( (node) => {
    console.log(node);
});
*/

addTraductionToNode();
jsonDatas.forEach( (node) => {
    console.log(node);
});






function addTraductionToNode(){
    console.log('enter');
     jsonDatas.forEach( (node) => {
         node.traduction= jsonTraduction[node.type];
     });
}






