function sound() {  
    const audio = new Audio('key_press.mp3');
    audio.play();
}
 let fg = Math.floor(Math.random() * 10 + 1)


function a(){
    let input = document.getElementById('a').value;
    if (input != fg) {
        document.getElementById('c').innerHTML = "try";
    }
    else {
        document.getElementById('c').innerHTML = "cong";
    }
}

