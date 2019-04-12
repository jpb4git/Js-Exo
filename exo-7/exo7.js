console.log("exo-7");

addTraductionToNode();




























function addTraductionToNode(){
    console.log('enter');
     jsonDatas.forEach( (node) => {
         node.traduction= jsonTraduction[node.type];
     });
}






