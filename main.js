let character = document.getElementById("character");
let block = document.getElementById("block");
let counter=0;

let jumpSfx = new Audio('sounds/jump-effect.wav');
let deathSfx = new Audio('sounds/death.wav');

function jump(){
    if(character.classList == "animate"){return}

    jumpSfx.play();
    

    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowUp' ) {
        jump();
    }
}); 




let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     

    

    if(blockLeft < 20 && blockLeft >- 20 && characterTop >= 130){
        block.style.animation = "none";

    deathSfx.play();

        alert("Game Over. score: " + Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

