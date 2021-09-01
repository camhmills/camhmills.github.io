async function advRoulette(){
    
    const gameInfo = document.createElement("p");
    const gamePic = document.createElement("img");
    const gameLink = document.createElement("a")
    const gameDoc = document.querySelector(".gameDoc");
    const store = document.querySelector("#store").value;
    console.log(store);
    const review = document.querySelector("#review").value;
    console.log(review);
    
    gameDoc.innerHTML = ""
    const gameData = await fetch (`https://www.cheapshark.com/api/1.0/deals?storeID=${store}&${review}`)
    const jsonGame = await gameData.json()
    console.log(jsonGame);

    randomGame = Math.floor(Math.random() * jsonGame.length)

    gameInfo.innerHTML = jsonGame[randomGame].title;
    gamePic.src = jsonGame[randomGame].thumb;
    gameLink.href = `https://store.steampowered.com/app/${jsonGame[randomGame].steamAppID}`;
    gameDoc.append(gameInfo);
    gameDoc.append(gameLink)
    gameLink.append(gamePic);
}

const gameButton = document.querySelector(".gameButton")

gameButton.addEventListener("click", () => advRoulette());