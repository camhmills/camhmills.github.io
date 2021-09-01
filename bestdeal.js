async function bestDeal(){
    const listContainer = document.querySelector(".listContainer");
    let count = 0
    gameData = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=50&pageSize=6`)
    gameList = await gameData.json();
    console.log(gameList);

    for (const game of gameList) {
        
        const gameTile = document.createElement("div");
        const gamePic = document.createElement("img");
        const gameTitle = document.createElement("p");
        const gameLink = document.createElement("a");

        gameLink.href = gameLink.href = `https://store.steampowered.com/app/${gameList[count].steamAppID}`
        gamePic.src = game.thumb
        gameTitle.innerHTML = game.title

        gameLink.append(gamePic)
        gameTile.append(gameTitle, gameLink)
        listContainer.append(gameTile)
        count++
        console.log(count)
    }
}

bestDeal()