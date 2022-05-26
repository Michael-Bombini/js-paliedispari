/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindroma(parola) {
    if(parola===undefined){
        return false;
    }

    //senza usare il metodo split possiamo scorrere la parola con due indici e 
    //confrontiamo carattere per carattere con due indici il ciclo si fermerà quando arriverò a metà della lunghezza della parola

    else{
        let f = parola.length-1 ;
        for(let i = 0 ; i < parola.length/2 ; i++ , f--){
            console.log(f);
            console.log(i);
            if(parola[i] !== parola[f])
               return false;
        
        }
    return true;
    }
}


//casi di esempio
console.log(isPalindroma());
console.log(isPalindroma("osso"));
console.log(isPalindroma("ciao"));
console.log(isPalindroma("itopinonavevanonipoti"));
