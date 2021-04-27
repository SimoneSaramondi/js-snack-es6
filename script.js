/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//FIRST SNACK   
let arrayBike = [
    { //[0]
        nameBike: "Bianchi",
        weigth: 20
    },
    { //[1]
        nameBike: "Rossi",
        weigth: 10
    },
    { //[2]
        nameBike: "Verdi",
        weigth: 40
    },
    { //[3]
        nameBike: "Gialli",
        weigth: 30
    },
    { //[4]
        nameBike: "Arancioni",
        weigth: 8
    },
    { //[5]
        nameBike: "Blu",
        weigth: 26
    }
]

//console.log(arrayBike);
let myWeigth = 100;
let index = 0;

for(let i = 0; i < arrayBike.length; i++){
    if(arrayBike[i].weigth <= myWeigth){
        myWeigth = arrayBike[i].weigth;
        index = i;
    }
}

const myBike = arrayBike[index];

const {nameBike, weigth} = myBike;

console.log(`La bici con il peso minore è ${nameBike} e il suo peso equivale a ${weigth} chili.`)


// ESERCIZIO IN CLASSE CORREZIONE (Secondo modo)

const bicyclesList = [
    { //[0]
        name: "Bianchi",
        weigth: 20
    },
    { //[1]
        name: "Rossi",
        weigth: 10
    },
    { //[2]
        name: "Verdi",
        weigth: 40
    },
    { //[3]
        name: "Gialli",
        weigth: 30
    },
    { //[4]
        name: "Arancioni",
        weigth: 8
    },
    { //[5]
        name: "Blu",
        weigth: 26
    }
];

const foundlighterBike = findLighterBike(bicyclesList);

function findLighterBike(arrayList){

    let lighterBike = null; // Inizialmente lo segno vuoto

    for(let i = 0; i < arrayList.length; i++){
        const{name, weigth} = arrayList[i]; // estraggo direttamente le due proprietà

        if(!lighterBike || weigth < lighterBike.weigth){
            lighterBike = { // Creo un nuovo oggetto
                name,
                weigth
            }
        }
    }

    return lighterBike;

}

console.log(foundlighterBike);

/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli
subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random
al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo
array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//SECOND SNACK
const arrayTeam = [
    { //[0]
        nameTeam: "Brescia",
        points: 0,
        fouls: 0
    },
    { //[1]
        nameTeam: "Verona",
        points: 0,
        fouls: 0
    },
    { //[2]
        nameTeam: "Atalanta",
        points: 0,
        fouls: 0
    },
    { //[3]
        nameTeam: "Milan",
        points: 0,
        fouls: 0
    },
]

function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

for(let i = 0; i < arrayTeam.length; i++){
    arrayTeam[i].points = random(1, 10);
    arrayTeam[i].fouls = random(1, 5);
}

const generateNewTeams = (teamList) =>{
    const newTeams = [];
    for(const thisTeam of teamList){
        const {nameTeam, fouls} = thisTeam;

        newTeams.push({
            nameTeam,
            fouls
        })
    }
    return newTeams;
}
console.log(generateNewTeams(arrayTeam));

