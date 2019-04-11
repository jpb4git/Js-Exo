// Partie 8 code academy
console.log("exo-6");
/*
// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: true,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log (joeInfo.cars.length);
// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms = 1;
console.log (joeInfo.bathrooms);
// Joe vient d'acquérir un garage changer la structure pour le refléter.
console.log (joeInfo.garage);

*/
var team = {
    _players: [],
    _games: [],
    addPlayer: function (first, last, age) {
        this._players.push({first, last, age});
    },
    addMatch: function (opp, Tpoints, OPoints) {
        this._games.push({opp, Tpoints, OPoints});
    },
    sommeMatch: function () {
        let somme = 0;
        /*
        for (i = 0 ; i < this._games.length; i++){
            somme += parseInt(this._games[i].Tpoints);

        }
        */
        this._games.forEach(function (element) {
            somme += element.Tpoints;
        });
        console.log("Somme des points de l'equipe :  " + somme);
    },
    moyenneAdverse: function () {
        let moyenne = 0;
        this._games.forEach(function (element) {
            moyenne += element.OPoints;
        });
        moyenne /= this._games.length;
        console.log("Moyenne des points de l'equipe :  " + moyenne);
    },
    findOlder: function () {
        let older = this._players[0].age;
        this._players.forEach((element) =>{
            if (element.age > older) {
                older = element.age;
            }
        })
        console.log("le joueur le plus agé : " + older + " ans");

    },
    sortPlayers: function () {
        console.log(this._players.sort(function(a,b){
            return a.first.localeCompare(b.first)
        }));

    },
};


let t1 = Object.create(team);
t1.addPlayer("jp", "b", 18);
t1.addPlayer("cc2", "b2", 28);
t1.addPlayer("bb3", "b3", 38);
t1.addPlayer("aajp4", "b4", 48);

t1.addMatch("marc", 55, 64);
t1.addMatch("marc2", 15, 34);
t1.addMatch("marc3", 10, 24);
t1.addMatch("marc4", 25, 14);
//------------------------------------------------------------------


t1.findOlder();
t1.sommeMatch();
t1.moyenneAdverse();
t1.findOlder();
t1.sortPlayers();
