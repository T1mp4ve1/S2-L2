/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  const Num1 = 67;
  const Num2 = 54;
  if (Num1 > Num2) {
    console.log("Il numero piu grande:", Num1);
  } else {
    console.log("Il numero piu grande:", Num2);
  }
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const Num3 = 5;
if (Num3 < 5) {
  console.log("Il numero inserito e minore di 5");
} else if (Num3 > 5) {
  console.log("Il numero e' piu grande di 5");
} else {
  console.log("Il numero e' uguale a 5");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let a = 87;
const b = 5;
const MyResult = a % b;
if (MyResult === 0) {
  console.log("E' divisibile per 5");
} else {
  console.log("Non e' divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
{
  let Num1 = 8;
  let Num2 = 5;
  if (Num1 || Num2 || Num1 + Num2 || Num1 - Num2 || Num2 - Num1 === 8) {
    console.log("Il risultato e' 8");
  } else {
    console.log("Il risultato non e' 8");
  }
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let totalShoppingCart = 55;
  if (totalShoppingCart >= 50) {
    console.log("Ti offriamo la spediazione gratuita!");
  } else {
    console.log("Se raggiungi 50 eur la spedizione la paghiamo noi!");
  }
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart = 40;
if (totalShoppingCart * 0.8 >= 50) {
  console.log("Ti offriamo la spediazione gratuita!");
} else {
  console.log("Se raggiungi 50 eur la spedizione la paghiamo noi!");
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let N1 = 14;
let N2 = 36;
let N3 = 6;
const MyMulti = [[N1], [N2], [N3]];
MyMulti.sort((a, b) => b - a);
console.log(MyMulti)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let TypeToCheck = 4;
console.log(typeof TypeToCheck);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let x = 87;
const y = 2;
const MyResult2 = x % y;
if (MyResult2 === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 10;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = ["name: John",
  "lastName: Doe",
  "Skills: Javascript, html, css"
];
me.push("city: Toronto");

console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
const ModMe = me.slice(0);
ModMe.splice(1, 1);
console.log(ModMe);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const ModMe2 = me.slice(0);
ModMe2.pop();
console.log(ModMe2);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const NumUp = [];
NumUp.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(NumUp);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
const NewNumUp = NumUp.slice(0);
NewNumUp.splice(NumUp.length - 1, 1, 100);
console.log(NewNumUp);