let currWin = ""
function continueGame() {
    document.getElementById("mainMenu").classList.remove("show")
}
function newGame() {
    document.getElementById("mainMenu").classList.remove("show")
    document.getElementById("newMenu").classList.add("show")
    currWin = "newMenu"
}
function loadGame() {
    document.getElementById("mainMenu").classList.remove("show")
    document.getElementById("loadMenu").classList.add("show")
    document.getElementById("backbtn").classList.add("show")
    currWin = "loadMenu"
}
function settings() {
    document.getElementById("mainMenu").classList.remove("show")
    document.getElementById("settMenu").classList.add("show")
    document.getElementById("backbtn").classList.add("show")
    currWin = "settMenu"
}
function credits() {
    document.getElementById("mainMenu").classList.remove("show")
    document.getElementById("cred").classList.add("show")
    document.getElementById("backbtn").classList.add("show")
    currWin = "cred"
}
function backtmm() {
    document.getElementById("mainMenu").classList.add("show")
    document.getElementById("backbtn").classList.remove("show")
    document.getElementById(`${currWin}`).classList.remove("show")
}

//Disable Continue button if no saves
if (files[0] === undefined) {
    let btn = document.getElementById("continue")
    btn.disabled = true;
    btn.classList.add("noHover")
}