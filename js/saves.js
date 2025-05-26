//Clickable divs with save info
for (let i = 0; i < 10; i++) {
    let element = document.createElement("div")
    if (files[i] !== undefined) {
        element.innerText = `Save ${i+1} ` + files[i].charName + " Gold: " + files[i].gold
    } else {
        element.innerText = `Save ${i+1}`
    }
    element.id = `saveGame${i+1}`
    element.classList.add("loadMenuButton", "text")
    if (files[i] !== undefined) {
        element.addEventListener("click", function() {
            loadGame(i+1)
        })
    }
    document.getElementById("loadMenu").appendChild(element)
}
function newSave(id){
    let file = {
        charName, gold, charClass, mainLvl, equArm, inv, tech, perks, compQuests, achievements
    };
    localStorage.setItem(`saveGame${id}`, JSON.stringify(file));
}

function loadSave(id){
    ({
        charName, gold, charClass, mainLvl, equArm, inv, tech, perks, compQuests, achievements
    } = files[id-1]);
}