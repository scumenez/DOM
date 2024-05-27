/*fetch("https://api.potterdb.com/v1/books")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
*/
//GET / api / public / card / { card_code }.json;

/*Lo scopo di questo task è di mostrare nella pagina una carta de "Il
    signore degli anelli" con: Nome del personaggio immagine del personaggio
    Prova a fetchare una card dal db del gioco di carte di Lord of the Rings, la
    documentazione dell'API la puoi trovare a questo link:
    https://ringsdb.com/api/doc Fai in modo che nella tua pagina html spuntino
    il nome del personaggio della carta, la sua immagine*/

async function fetchData() {
  try {
    //const response = await fetch("https://api.potterdb.com/v1/books");
    const response = await fetch("https://ringsdb.com/api/public/cards/");
    const responseJson = await response.json();
    console.log(responseJson);
    const book = responseJson[12];
    //console.log(book);
    const title = book.name;
    const cover = `https://ringsdb.com` + book.imagesrc;
    //const cover2 = "https://ringsdb.com/bundles/cards/01001.png";
    //const { title, cover } = book.attributes;
    console.log(title, cover);
    const h1 = document.querySelector(".my-title");
    h1.innerText = title;
    const image = document.querySelector(".my-image");
    image.setAttribute("src", cover);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

/*
const apiUrl = "https://ringsdb.com/api/public/card/01001";

https: fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const card = data[0]; // prendiamo la prima carta del risultato
    const cardContainer = document.getElementById("card-container");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = card.imagesrc;
    cardImage.alt = card.name;

    const cardName = document.createElement("h3");
    cardName.innerText = card.name;

    const cardType = document.createElement("h3");
    cardType.innerText = `Type: ${card.type}`;

    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardType);

    cardContainer.appendChild(cardDiv);
  });
*/
