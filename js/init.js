for (let i = 0; i !== 0; i++){
    if (JSON.parse(localStorage.getItem(`saveGame${i+1}`)) !== null) {
        files[i] = JSON.parse(localStorage.getItem(`saveGame${i+1}`));
    } else {
        i = 0
    }
}