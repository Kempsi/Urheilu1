// Päätiedosto, jossa koodi suoritetaan

// Tuodaan Urheilija luokka
const Urheilija = require("./cl/Urheilija");

// Luodaan uusi Urheilija olio
const urheilija = new Urheilija(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  113,
  "Jalkapallo",
  [
    "Olympiakulta 2004",
    "Olympiakulta 2008",
    "Olympiakulta 2012",
    "Olympiakulta 2024",
  ],
  "James",
  "Raymone",
  "LeBron",
  "LBJ",
  1984
);

// Asetetaan urheilijan oikea laji
urheilija.setSport("Koripallo");

// Tulostetaan urheilijan kuvan linkki konsoliin
console.log(urheilija.getPicture());

// Tulostetaan urheilijan koko nimi konsoliin
console.log(
  "Urheilijan koko nimi: " +
    urheilija.firstName +
    " " +
    urheilija.middleName +
    " " +
    urheilija.lastName
);

// Tulostetaan olion tiedot konsoliin
console.table(urheilija);
