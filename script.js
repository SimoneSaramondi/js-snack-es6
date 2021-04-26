/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
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
let indice = 0;

for(let i = 0; i < arrayBike.length; i++){
    if(arrayBike[i].weigth <= myWeigth){
        myWeigth = arrayBike[i].weigth;
        indice = i;
    }
}

const myBike = arrayBike[indice];

const {nameBike, weigth} = myBike;

console.log(`La bici con il peso minore è ${nameBike} e il suo peso equivale a ${weigth} chili.`)
