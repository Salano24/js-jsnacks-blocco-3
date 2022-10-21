//Crea un array composto da 10 automobili.

let automobili = [
    {
      marca: 'opel',
      modello: 'meriva',
      alimentazione: 'elettrica'
    },
    {
    marca: 'opel',
    modello: 'astra',
    alimentazione: 'elettrica'
    },{
    marca: 'nissan',
    modello: 'micra',
    alimentazione: 'benzina'
    },{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'diesel'
    },{
    marca: 'lancia',
    modello: 'delta',
    alimentazione: 'benzina'
    },{
    marca: 'fiat',
    modello: '600',
    alimentazione: 'benzina'
    },{
    marca: 'fiat',
    modello: 'panda',
    alimentazione: 'diesel'
    },{
    marca: 'audi',
    modello: 'sportback',
    alimentazione: 'elettrica'
    },{
    marca: 'dacia',
    modello: 'spring',
    alimentazione: 'elettrica'
    },{
    marca: 'dacia',
    modello: 'duster',
    alimentazione: 'elettrica'
    },
]

//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, elettrico, diesel).



//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const benzCar = automobili.filter(checkGas);
const dieselCar = automobili.filter(checkdiesel);
const electricCar = automobili.filter(checkElectric);

function checkGas(automobili) {
    return automobili.alimentazione == "benzina";
}
console.log(benzCar)

function checkdiesel(automobili) {
    return automobili.alimentazione == "diesel";
}
console.log(dieselCar)

function checkElectric(automobili) {
    return automobili.alimentazione == "elettrica";
}
console.log(electricCar)