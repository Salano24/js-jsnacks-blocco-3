const paroleStorte = ['arCoBalenO', 'caSa', 'aUTOMoBIle', 'PAllA'];

let paroleCorrette = [];
let parolaCorretta
let  iniziale
let corpo
for (let i = 0; i < paroleStorte.length; i++) {
     parolaCorretta = paroleStorte[i].toLowerCase();
     iniziale = parolaCorretta[0].toUpperCase();
    
     paroleCorrette.push(parolaCorretta)
    
}

console.log(paroleCorrette);
