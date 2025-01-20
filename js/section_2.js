let buttonSwitchPrevFrame = document.querySelector("#button-switch-frame-prev");
let buttonSwitchNextFrame = document.querySelector("#button-switch-frame-next");

let blocker = false;

let blockNameMonument = document.querySelector(".block_name_monument");
let blocks = blockNameMonument.querySelectorAll('.name_monument__set');

let blockImg = document.querySelector(".block_img");
let setsImg = blockImg.querySelectorAll(".img_monument__set");

let buttonLoop = document.querySelector("#button-loop");
let frameLoop = false;
let intervalLoop;



buttonSwitchPrevFrame.addEventListener("click", (e) => {
    e.preventDefault();

    if(!blocker){
        changingNameMonument(0, "prev");
        changingImgMonument();

        blocker = true;
    }
});

buttonSwitchNextFrame.addEventListener("click", (e) => {
    e.preventDefault();

    if(!blocker){
        changingNameMonument(0, "next");
        changingImgMonument();

        blocker = true;
    }
});


buttonLoop.addEventListener("click", (e) => {
    e.preventDefault();

    if(!frameLoop){
        changingFrameLoop();
        intervalLoop = setInterval(changingFrameLoop, 3000);
        
        buttonLoop.classList.add("_stop");
        buttonLoop.parentNode.querySelector(".tooltip").textContent = "Остановить просмотр";

        frameLoop = true;
    } else{
        clearInterval(intervalLoop);
        buttonLoop.classList.remove("_stop");
        buttonLoop.parentNode.querySelector(".tooltip").textContent = "Бесконечный просмотр";

        frameLoop = false;
    }
});



function changingNameMonument(idFrameSwitching, switchingSide){
    if(idFrameSwitching === 0){
        if(switchingSide === "next"){
            blocks[1].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";
            blocks[2].style = "opacity: 1; transform: translateY(0px);";
    
            setTimeout(() => {
                blocks[2].classList.add("_active");
                blocks[1].classList.remove("_active");
    
                blockNameMonument.removeChild(blocks[0]);
                blockNameMonument.appendChild(blocks[0]);
    
                blocks = document.querySelectorAll('.name_monument__set');
                blocks[2].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
            }, 500);
        } else if(switchingSide === "prev"){
            blocks[1].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
            blocks[0].style = "opacity: 1; transform: translateY(0px);";
    
            setTimeout(() => {
                blocks[0].classList.add("_active");
                blocks[1].classList.remove("_active");
    
                blockNameMonument.removeChild(blocks[2]);
                blockNameMonument.insertBefore(blocks[2], blockNameMonument.firstChild);
    
                blocks = document.querySelectorAll('.name_monument__set');
                blocks[0].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";
            }, 500);
        }
    } else{
        blocks[0].querySelector("span").textContent = `${idFrameSwitching}`;

        blocks[1].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
        blocks[0].style = "opacity: 1; transform: translateY(0px);";

        setTimeout(() => {
            blocks[0].classList.add("_active");
            blocks[1].classList.remove("_active");

            blockNameMonument.removeChild(blocks[2]);
            blockNameMonument.insertBefore(blocks[2], blockNameMonument.firstChild);

            blocks = document.querySelectorAll('.name_monument__set');
            blocks[0].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";

            blocks[0].querySelector("span").textContent = `${idFrameSwitching - 1 < 1 ? 3 : idFrameSwitching - 1}`;
            blocks[2].querySelector("span").textContent = `${idFrameSwitching + 1 > 3 ? 1 : idFrameSwitching + 1}`;
        }, 500);
    }
};

function changingImgMonument(){
    setsImg[0].style = "opacity: 0; transform: translateY(60px);";
    
    setTimeout(() => {
        setsImg[1].style = "opacity: 1; transform: translateY(0px);";
    }, 500);

    setTimeout(() => {
        blockImg.removeChild(setsImg[0]);
        blockImg.appendChild(setsImg[0]);
        setsImg = blockImg.querySelectorAll(".img_monument__set");
        setsImg[1].style = "opacity: 0; transform: translateY(100px);";

        blocker = false;
    }, 1050);
};


function changingFrameLoop(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    changingImgMonument();
    changingNameMonument(randomNumber, "prev");
};