
async function getGames(){

    const gameDoc = document.querySelector(".games");
    const priceCeiling = 50
    const priceFloor = Math.floor((Math.random() * 49) + 1)
    const gameInfo = document.createElement("p");
    const gamePic = document.createElement("img");
    const gameLink = document.createElement("a")
    gameDoc.innerHTML = ""

    const gameData = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${priceCeiling}&lowerPrice=${priceFloor}`)
    const jsonGame = await gameData.json()



    randomGame = Math.floor(Math.random() * jsonGame.length)
    console.log(jsonGame)
    console.log(jsonGame[randomGame]);

    gameInfo.innerHTML = jsonGame[randomGame].title;
    gamePic.src = jsonGame[randomGame].thumb;
    gameLink.href = `https://store.steampowered.com/app/${jsonGame[randomGame].steamAppID}`;
    gameDoc.append(gameInfo);
    gameDoc.append(gameLink)
    gameLink.append(gamePic);
}


const gameButton = document.querySelector(".gameButton");

gameButton.addEventListener("click", () => getGames());

