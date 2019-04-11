var selectionUser = [];
let ASC = true;
let ASC_NUM = true;

/**
 *
 * @param jsdata tableau  d'objet json
 */
function liste(jsdata) {
    selectionUser = [];
    var myType = document.getElementById('type').value
    var ShowNoStock = document.getElementById("noStock").checked;
    var myMain = document.getElementById("main");
    var mycol = document.getElementById("colList");
    var newRow = document.createElement("row");
    var newcol = document.createElement("col");

    while (mycol.firstChild) mycol.removeChild(mycol.firstChild);

    jsdata.forEach((node) => {
            if (myType === node.type || myType === node.traduction) {
                if (node.quantity == 0) {
                    if (ShowNoStock) {
                        Listing(mycol, node);
                        selectionUser.push(node);
                    }
                } else {
                    Listing(mycol, node);
                    selectionUser.push(node);
                }

            }
        }
    );
}

/**
 *
 */
function trierNom() {
    if (ASC) {

        let TriednodesA = selectionUser.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        })
        ASC= false;
        liste(TriednodesA);
    } else {

        let TriednodesB = selectionUser.sort(function (a, b) {
            return b.name.localeCompare(a.name)

        })
        ASC= true;
        liste(TriednodesB);
    }

}

/**
 *
 */
function trierPrix() {
    if (ASC_NUM) {
        let Triednodes = selectionUser.sort(function (a, b) {
            return a.price - b.price
        })
        ASC_NUM= false;
        liste(Triednodes);
    }else{
        let TriednodesB = selectionUser.sort(function (a, b) {
            return b.price - a.price
        })
        ASC_NUM = true;
        liste(TriednodesB);
    }
}

/**
 *
 * @param mycol div html de destination
 * @param node obj json
 * @constructor
 */
function Listing(mycol, node) {
    mycol.appendChild(document.createTextNode(' Name : '));
    mycol.appendChild(document.createTextNode(node.name));
    mycol.appendChild(document.createTextNode(' '));
    mycol.appendChild(document.createTextNode(' type : '));
    mycol.appendChild(document.createTextNode(node.traduction));
    mycol.appendChild(document.createTextNode(' '));
    mycol.appendChild(document.createTextNode(' Desc : '));
    mycol.appendChild(document.createTextNode(node.description));
    mycol.appendChild(document.createTextNode(' '));
    mycol.appendChild(document.createTextNode(' Price : '));
    mycol.appendChild(document.createTextNode(node.price));
    mycol.appendChild(document.createTextNode(' '));
    mycol.appendChild(document.createTextNode(' Qts : '));
    mycol.appendChild(document.createTextNode(node.quantity));
    mycol.appendChild(document.createTextNode(' '));
    mycol.appendChild(document.createElement('br'));
}

function loadSelect(jsonTraduction){
    var select = document.getElementById("AddSelectType");

    for (var node in jsonTraduction){
        select.options[select.options.length] = new Option(node, jsonTraduction[node]);
    }


}

function AjoutProduit(){

    let produit ={
        "name" :document.getElementById("addName").value,
        "type" : document.getElementById("addName").value,
        "description" : document.getElementById("addDesc").value,
        "price" : document.getElementById("addPrice").value,
        "quantity" : document.getElementById("addQts").value,
        "traduction" : document.getElementById("AddSelectType").value
    };

    alert(produit.name + " " + produit.type + " " + produit.traduction);

}