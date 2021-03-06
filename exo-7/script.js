var selectionUser = [];
let ASC = true;
let ASC_NUM = true;

var triNom = document.getElementById('trierNom');

triNom.addEventListener('click', () => {
    trierPrix(selectionUser);
});

var triPrix = document.getElementById('trierPrix');

triPrix.addEventListener('click', () => {
    trierPrix(selectionUser)
});

var AllProducts = document.getElementById('allProducts');
AllProducts.addEventListener('click', () => {
     allProducts(jsonDatas)
});



window.onload = function () {
    var select = document.getElementById("AddSelectType");
    var select2 = document.getElementById("AddSelectType2");

    for (var node in jsonTraduction) {
        select.options[select.options.length] = new Option(node, jsonTraduction[node]);
    }
    
    for (var node in jsonTraduction) {
        select2.options[select2.options.length] = new Option(node, jsonTraduction[node]);
    }



}
/**
 *
 * @param data
 */
function searchByCategory(data) {
    document.getElementById('main').innerHTML = "";
    selectionUser = [];
    setUserArray(data, false);
    feedDocumentWithTable();
}

/**
 *
 * @param data
 */
function allProducts(data) {
    selectionUser = [];
    data.forEach((node) => {
        selectionUser.push(node);
})
    ;
    feedDocumentWithTable();
}

/**
 *
 * @param jsdata tableau  d'objet json
 */
function setUserArray(jsdata, AllProduct) {
    var myType = document.getElementById('type').value
    var ShowNoStock = document.getElementById("noStock").checked;
    // create the json User selection
    jsdata.forEach((node) => {
        if(!AllProduct){
        if (myType === node.type || myType === node.traduction) {
            if (node.quantity == 0) {
                if (ShowNoStock) {
                    selectionUser.push(node);
                }
            } else {
                selectionUser.push(node);
            }
        }

    }
else
    {
        selectionUser.push(node);
    }
});

}


/**
 *
 * @param select
 */
function trierNom(US) {
    selectionUser = [];
    if (ASC) {
        let TriednodesA = US.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        })
        ASC = false;

        setUserArray(TriednodesA, true);
    } else {
        let TriednodesB = US.sort(function (a, b) {
            return b.name.localeCompare(a.name)
        })
        ASC = true;
        setUserArray(TriednodesB, true);
    }
    feedDocumentWithTable();
}

/**
 *
 * @param select
 */
function trierPrix(US) {
    selectionUser = [];

    if (ASC_NUM) {
        let Triednodes = US.sort(function (a, b) {
            return a.price - b.price
        })
        ASC_NUM = false;

        setUserArray(Triednodes, true);
    } else {
        let TriednodesB = US.sort(function (a, b) {
            return b.price - a.price
        })
        ASC_NUM = true;

        setUserArray(TriednodesB, true);
    }


    feedDocumentWithTable();
}

/**
 *  ajoute au DOM la table remplie avec lse données Utilisateur
 * in progress !!! 
 */
function feedDocumentWithTable() {
    // call json2Table
   document.getElementById('main').innerHTML = json2Table(selectionUser, 'thead-dark table-striped table-bordered  w-100');
   
   var Tp = document.getElementById('Tproducts');
   //TrProduct = Tp.childNodes;
   
    // select all rows on table
    var rows = Tp.getElementsByTagName("tr");
    rows
    // iterate on tr elements 
    for (index = 1; index < rows.length; index++) {
        var currentRow = Tp.rows[index];
        Tp.rows[index].style.cursor = "pointer";
        var createOnMouseOverHandler = function(currentRow,rows,i) {
        // if i 'm not on th row 
           
                return function() {
                    resetStyle(Tp);
                   rows[i].style.fontSize ='16px';
                   rows[i].style.backgroundColor = "rgb(0,0,0)";
                   rows[i].style.color = 'white'
                };
        
      };

      currentRow.onmouseover = createOnMouseOverHandler(currentRow,rows,index);
    }
   
   


   
   Tproducts.onclick = function(){
      
        elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);

        resetStyle(Tp);
        elementMouseIsOver.parentNode.style.fontSize = "16px";
        elementMouseIsOver.parentNode.style.backgroundColor = "orange";
        elementMouseIsOver.parentNode.style.color = "black";
    
       
   }
}




function resetStyle(element){
    for (var i = 0, row; row = element.rows[i]; i++) {
     row.style.fontSize = "medium";
     row.style.backgroundColor = "white";
     row.style.color = "black";
    }    
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
        "type": document.getElementById("AddSelectType").value,
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
function json2Table(json, classes) {

    var headerRow = '';
    var bodyRows = '';
    classes = classes || '';  //
    var cols = Object.keys(json[0]);
    cols.map(function (col) {
        headerRow += '<th  scope="col" class="text-center">' + capitalizeFirstLetter(col) + '</th>';
    });
    // iteration du json
    json.map(function (row) {
        bodyRows += '<tr class="text-center">';
        // Loop over object properties and create cells
        cols.map(function (colName) {
            bodyRows += '<td class="text-center">' + row[colName] + '</td>';
        });
        bodyRows += '</tr>';
    });
    return '<table id="Tproducts" class="' + classes + '"><thead><tr>' + headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
}

function json2TableV2(json , classes){
    var Tproducts = document.createElement('table');

}



/**
 *
 * @param string chaine à capitaliser
 * @returns {string} chaine capitalisé
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
