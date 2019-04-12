var selectionUser = [];

let ASC = true;
let ASC_NUM = true;

<<<<<<< HEAD
window.onload = function () {
=======
window.onload =  function(){
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
    var select = document.getElementById("AddSelectType");
    for (var node in jsonTraduction) {
        select.options[select.options.length] = new Option(node, jsonTraduction[node]);
    }
}

/**
 *
 * @param data
 */
<<<<<<< HEAD
function searchByCategory(data) {
    document.getElementById('main').innerHTML = "";
    selectionUser = [];
    setUserArray(data, false);
    feedDocumentWithTable();
}

=======
function searchByCategory(data){
    document.getElementById('main').innerHTML ="";
    selectionUser = [];
    setUserArray(data);
    feedDocumentWithTable();
}
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
/**
 *
 * @param data
 */
<<<<<<< HEAD
function allProducts(data) {
    selectionUser = [];
    data.forEach((node) => {
        selectionUser.push(node);
})
    ;
=======
function allProducts(data){
    selectionUser =[];
    data.forEach((node) => {
    selectionUser.push(node);
});
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
    feedDocumentWithTable();
}

/**
 *
 * @param jsdata tableau  d'objet json
 */
<<<<<<< HEAD
function setUserArray(jsdata, AllProduct) {
=======
function setUserArray(jsdata) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
    var myType = document.getElementById('type').value
    var ShowNoStock = document.getElementById("noStock").checked;
    // crate th json User selection
    jsdata.forEach((node) => {
<<<<<<< HEAD
        if(
    !AllProduct
)
    {
        if (myType === node.type || myType === node.traduction) {
            if (node.quantity == 0) {
                if (ShowNoStock) {
                    selectionUser.push(node);
                }
            } else {
=======
        if(myType === node.type || myType === node.traduction){
        if (node.quantity == 0) {
            if (ShowNoStock) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
                selectionUser.push(node);
            }
        } else {
            selectionUser.push(node);
        }
<<<<<<< HEAD

    }
else
    {
        selectionUser.push(node);
    }
}
)
    ;
=======
    }});
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0

}


<<<<<<< HEAD
=======

>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
/**
 *
 * @param select
 */
<<<<<<< HEAD
function trierNom(US) {
    selectionUser = [];
    if (ASC) {
        let TriednodesA = US.sort(function (a, b) {
=======
function trierNom(select) {
    selectionUser =[];
    if (ASC) {
        let TriednodesA = select.sort(function (a, b) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
            return a.name.localeCompare(b.name)
        })
        ASC = false;

<<<<<<< HEAD
        setUserArray(TriednodesA, true);
    } else {
        let TriednodesB = US.sort(function (a, b) {
            return b.name.localeCompare(a.name)
        })
        ASC = true;
        setUserArray(TriednodesB, true);
=======
        setUserArray(TriednodesA);
    } else {
        let TriednodesB = select.sort(function (a, b) {
         return b.name.localeCompare(a.name)
        })
        ASC = true;
        setUserArray(TriednodesB);
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
    }
    feedDocumentWithTable();
}

/**
 *
 * @param select
 */
<<<<<<< HEAD
function trierPrix(US) {
    selectionUser = [];

    if (ASC_NUM) {
        let Triednodes = US.sort(function (a, b) {
=======
function trierPrix(select) {
    selectionUser =[];

    if (ASC_NUM) {
        let Triednodes = select.sort(function (a, b) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
            return a.price - b.price
        })
        ASC_NUM = false;

<<<<<<< HEAD
        setUserArray(Triednodes, true);
    } else {
        let TriednodesB = US.sort(function (a, b) {
=======
        setUserArray(Triednodes);
    } else {
        let TriednodesB = select.sort(function (a, b) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
            return b.price - a.price
        })
        ASC_NUM = true;

<<<<<<< HEAD
        setUserArray(TriednodesB, true);
=======
        setUserArray(TriednodesB);
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
    }


    feedDocumentWithTable();
}

/**
 *  ajoute au DOM la table remplie avec lse données Utilisateur
 */
<<<<<<< HEAD
function feedDocumentWithTable() {
    // call json2Table

    document.getElementById('main').innerHTML = json2Table(selectionUser, '.thead-dark table-striped table-bordered  w-100');
=======
function feedDocumentWithTable(){
    // call json2Table

    document.getElementById('main').innerHTML = json2Table(selectionUser,'.thead-dark table-striped table-bordered  w-100');
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
}

/**
 *  fonction appelée au load wondows. remplie le select avec les catégories
 * @param jsonTraduction
 */
function loadSelect(jsonTraduction) {
    var select = document.getElementById("AddSelectType");

    for (var node in jsonTraduction) {
        select.options[select.options.length] = new Option(node, jsonTraduction[node]);
    }
}

/**
 * ajouter un produits au json jsonDatas
 * @constructor
 */
function AjoutProduit() {

    let product = {
        "name": document.getElementById("addName").value,
        "type": document.getElementById("addName").value,
        "description": document.getElementById("addDesc").value,
        "price": document.getElementById("addPrice").value,
        "quantity": document.getElementById("addQts").value,
        "traduction": document.getElementById("AddSelectType").value
    };

    jsonDatas.push(product);
    console.log(jsonDatas);
    allProducts(jsonDatas);

    alert(produit.name + " " + produit.type + " " + produit.traduction);

}

/**
 *
 * @param json  selection user
 * @param classes nom de classe facultatives ajoutées à la div table.
 * @returns {string} renvoie une chaine de caratères contenant la table et les données
 */
<<<<<<< HEAD
function json2Table(json, classes) {
=======
function json2Table(json , classes) {
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0

    var headerRow = '';
    var bodyRows = '';
    classes = classes || '';  //
    var cols = Object.keys(json[0]);
<<<<<<< HEAD
    cols.map(function (col) {
        headerRow += '<th  scope="col" class="text-center">' + capitalizeFirstLetter(col) + '</th>';
    });
    // iteration du json
    json.map(function (row) {
        bodyRows += '<tr class="text-center">';
        // To do: Loop over object properties and create cells
        cols.map(function (colName) {
            bodyRows += '<td class="text-center">' + row[colName] + '</td>';
        });
        bodyRows += '</tr>';
    });
    return '<table class="' + classes + '"><thead><tr>' + headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
=======
    cols.map(function(col) {
        headerRow += '<th  scope="col" class="text-center">' + capitalizeFirstLetter(col) + '</th>';
    });
    // iteration du json
    json.map(function(row) {
      bodyRows += '<tr class="text-center">';
        // To do: Loop over object properties and create cells
        cols.map(function(colName) {
            bodyRows += '<td class="text-center">' + row[colName] + '</td>';
        });
      bodyRows += '</tr>';
    });
    return '<table class="' + classes + '"><thead><tr>' +headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
>>>>>>> a923f01c4c3918b2a2769d2550279ee4b4138aa0
}

/**
 *
 * @param string chaine à capitaliser
 * @returns {string} chaine capitalisé
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
