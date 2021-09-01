
async function gameBackground(){

    const background = document.querySelector(".background");

    const gameData = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`)
    const jsonGame = await gameData.json()
    console.log(jsonGame);

    for (const game of jsonGame) {
        const tileDiv = document.createElement("div")
        const gameTile = document.createElement("img")
        gameTile.src = game.thumb
        background.append(tileDiv);
        tileDiv.append(gameTile);
    }
}

gameBackground()