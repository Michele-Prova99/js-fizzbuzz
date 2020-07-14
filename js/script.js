// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// 1) Faccio il ciclo for per creare una lista di numeri da 1 a 100

for (var i = 1; i <= 100; i++) {

// 2) Impongo la prima condizione: stampare "FIZZBUZZ" per i numeri multipli sia di 3 che di 5

if (i % 3 == 0 && i % 5 == 0) {
  document.getElementById("text").innerHTML += " FIZZBUZZ ";
}

// 3) Impongo la seconda condizione: stampare "Fizz" per i numeri multipli di 3

else if (i % 3 == 0) {
  document.getElementById("text").innerHTML += " Fizz ";
}

// 4) Impongo la terza condizione: stampare "Buzz" per i numeri multipli di 5

else if (i % 5 == 0) {
  document.getElementById("text").innerHTML += " Buzz ";
}

// 5) Impongo la quarta condizione: stampare tutti gli altri numeri normalmente

else {
  document.getElementById("text").innerHTML += " " + i + " ";
}

}
