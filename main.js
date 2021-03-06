
const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaSuperman = 100;
let energiaGoku = 100;


let round = 1;

/* function calcularGolpe(){
    return Math.ceil(Math.random()*(MAX_POWER-MIN_POWER)+MIN_POWER);
} */

const calcularGolpe = () => Math.ceil(Math.random()*(MAX_POWER-MIN_POWER)+MIN_POWER);

/* function tieneEnergia(){
    return energiaGoku > 0 && energiaSuperman > 0;
} */

const tieneEnergia = () => energiaGoku > 0 && energiaSuperman > 0;

const supermanSigueEnPie = () => energiaGoku < 0;

while(tieneEnergia()){
    console.log(`Round ${round}`);

    let golpeSuperman = calcularGolpe();
    console.log(`Golpe Superman ${golpeSuperman}`);

    let golpeGoku = calcularGolpe();
    console.log(`Golpe Goku ${golpeGoku}`);

    document.write(`<h3>Round ${round}</h3></br>`)

    if(golpeGoku > golpeSuperman){
        energiaSuperman -= golpeGoku;
        document.write(`<div class='card'><img src='./img/golpe-goku.png'><p>Goku golpea por ${golpeGoku}</p><p>La vida de Superman queda en ${energiaSuperman}</p></div>`)
    } else {
        energiaGoku -= golpeSuperman;
        document.write(`<div class='card'><img src='./img/golpe-superman.jpg'><p>Superman golpea por ${golpeSuperman}</p><p>La vida de Goku queda en ${energiaGoku}</p></div>`)

    }

    if(golpeGoku > 20 && energiaGoku < 100){
        energiaGoku += 5;
    }

    if(golpeSuperman > 20 && energiaSuperman < 100){
        energiaSuperman += 5;
    }


    console.log(`Energia Goku ${energiaGoku}`);
    console.log(`Energia Superman ${energiaSuperman}`); 

    round += 1;
}

if(supermanSigueEnPie()){
    console.log("Gano Superman");
    document.write("<div class='ganador'><img src='./img/superman-win.jpg'><h3>Superman Wins!</h3></div> ");
} else {
    console.log("Gano Goku");
    document.write("<div class='ganador'><img src='./img/goku-win.jpg'><h3>Goku Wins!</h3></div>");

}

