function startNewGame() {
    document.getElementById("newMenu").classList.remove("show")
    document.getElementById("charCreation").classList.add("show")
}
function confirmName() {
    charName = document.getElementById('inputBox').value
    if (charName !== "") {
        document.getElementById("charCreation").classList.remove("show")
        document.getElementById("assignAttributes").classList.add("show")
        let numberOfDices = 0
        let dicerollInterval = setInterval(function () {
            let image = document.createElement("img")
            let rndNum = Math.floor(Math.random() * 10) + 1;
            image.src = "../img/diceroll.webp"
            image.classList.add("dicerolled")
            document.getElementById("dicerolls").appendChild(image)
            setTimeout(function () {
                image.src = `../img/dice${rndNum}.png`
                image.classList.add("zoom");
                setTimeout(() => {
                    image.classList.remove('zoom');
                }, 400)
            }, 1000)
            numberOfDices++
            if (numberOfDices === 6) {
                clearInterval(dicerollInterval); // stop the interval when counter is 5
                console.log('Interval cleared');
            }
        }, 500)
    }
}