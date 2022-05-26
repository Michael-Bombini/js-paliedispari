/*
Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

*/


//Funzione che validerà la scelta dell'utente pari o dispari o valore errato -1
function sceltaPD(scelta){

    //trasformo il testo inserito dall'utente in lowecase
    //per verificare che non sia con valori es : PARI/PaRI DiSPaRI ecc...
    scelta = scelta.toLowerCase();

    if(scelta === "pari")
        return "pari";
    else if(scelta==="dispari")
        return "dispari";
    else 
        return -1;
}



//Scelta del numero per l'utente
function inserisciNum(){
    let numero = parseInt(prompt("Inserisci i numero tra 1 e 5"));
    if(numero<1 || numero>5 || isNaN(numero))
        return -1;
    return numero;
}

//Funzione che genera un numero random (per il computer)
function genRandom(){
    return Math.floor(Math.random() * 5 )+1;
}


//funzione che stabilisce se la somma è pari o dispari
function isSommaPD(somma){
    if(somma%2===0)
        return "pari";
    else
        if(somma%2===1)
            return "dispari";
    else
        return -1;
}


const scelta = sceltaPD(prompt("Inserisci se pari o dispari"));

const numeroUtente = inserisciNum();

const numeroComputer = genRandom();

const somma = numeroUtente+numeroComputer;

const risultato = isSommaPD(somma);


if(scelta === -1 || numeroUtente === -1 || risultato === -1)
{
    alert("errore nell'inserimento di uno o più valori");
}
else {
if(risultato === scelta)
    alert(`Hai vinto tu UTENTE perché hai scelto ${scelta} ed il numero ottenuto dalla somma è stato ${somma} `);
else
    alert(`Ha vinto il COMPUTER il numero ottenuto dalla somma è stato ${somma} `);
}