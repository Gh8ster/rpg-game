document.getElementById('intro').style.visibility = 'visible'
document.getElementById("intro").classList.add("show");
let title = document.getElementById("title").innerHTML
let messageNum = 0
let message = ""
const introM = ["This is an unfinished project.",
    " Expect bugs, unfinished features and an incomplete experience.",
    "Wear headphones for the best experience.",
    ""]
let typingInterval = null
let shouldContinue = 0;
let done = 0
function typing(sentence) {
    let i = 0
    if (shouldContinue === 0) {
        message = ""
    }
    if (typingInterval) {
        clearInterval(typingInterval);
    }
    typingInterval = setInterval(function() {
        if (i < sentence.length) {
            message += sentence[i];
            i++;
            document.getElementById("introT").innerHTML = message;
            if (i === sentence.length){
                if (done === 1){
                    document.getElementById('intro').style.visibility = 'visible'
                    document.getElementById("intro").classList.add("show");
                    done = 0
                }
            }
        } else {
            clearInterval(typingInterval);
        }
    }, 20);
    switch (messageNum) {
        case 0:
            shouldContinue++;
            break;
        case 1:
            shouldContinue = 0;
            break;
        default:
            break;
    }
}

//Intro space bar key listener
function triggerIntro() {
    if (done === 0) {
        document.getElementById('intro').style.visibility = 'hidden';
        document.getElementById("intro").classList.remove("show");
        typing(introM[messageNum]);
        messageNum++;
        done = 1;

        if (messageNum === 4) {
            document.getElementById("introT").innerHTML = "";
            document.getElementById("introT").remove();
            document.getElementById("intro").remove();
            document.getElementById("mainMenu").classList.add("show");
        }
    }
}

// Keyboard input
window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) return;
    if (event.code === "Space") {
        triggerIntro();
    }
}, true);

// Touch input
window.addEventListener("touchstart", (event) => {
    triggerIntro();
}, true);