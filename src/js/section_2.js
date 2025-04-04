let blockMonuments = section2.querySelector('.block_monuments');

// let blockNameMonument = document.querySelector(".block_name_monument");
// let blocks = blockNameMonument.querySelectorAll('.name_monument__set');

// let blockImg = document.querySelector(".block_img");
// let setsImg = blockImg.querySelectorAll(".img_monument__set");

let blocker = false;

let buttonSwitchPrevFrame = document.querySelector("#button-switch-frame-prev");
let buttonSwitchNextFrame = document.querySelector("#button-switch-frame-next");

let buttonLoop = document.querySelector("#button-loop");
let frameLoop = false;
let intervalLoop;



const frames = [
    {
        id: 1,
        imageUrl: "../img/section_2/monuments/1.png",
        title: "Героям Хасана",
        address: "ул. Героев Хасана, 1а, Славянка, Приморский край"
    },
    {
        id: 2,
        imageUrl: "../img/section_2/monuments/1.png",
        title: "Героям Хасана 1",
        address: "ул. Героев Хасана, 1а, Славянка, Приморский край"
    },
    {
        id: 3,
        imageUrl: "../img/section_2/monuments/1.png",
        title: "Героям Хасана 2",
        address: "ул. Героев Хасана, 1а, Славянка, Приморский край"
    }
];



buttonSwitchNextFrame.addEventListener("click", (e) => {
    e.preventDefault();

    if(!blocker){
        blocker = true;

        let blockMonumentActive = blockMonuments.querySelector("._active");
        let blockMonumentNext = blockMonuments.querySelector("._next");
        let blockMonumentPrev = blockMonuments.querySelector("._prev");
    
        blockMonumentActive.style.transition = "all .7s ease";
        blockMonumentNext.style.transition = "all .7s ease";
    
    
        blockMonumentActive.classList.remove("_active");
        blockMonumentActive.classList.add("_prev");
    
        blockMonumentNext.classList.remove("_next");
        blockMonumentNext.classList.add("_active");
    
        blockMonumentPrev.classList.add("none");
        blockMonumentPrev.classList.remove("_prev");
    

        blockMonumentNext = (blockMonumentNext === blockMonuments.lastElementChild) 
            ? blockMonuments.firstElementChild 
            : blockMonumentNext.nextElementSibling;
    
        blockMonumentNext.classList.add("_next");
        blockMonumentNext.classList.remove("none");


        setTimeout(() => {
            blockMonumentActive.style.transition = "";
            blockMonumentNext.style.transition = "";

            blocker = false;
        }, 700);
    }
});

buttonSwitchPrevFrame.addEventListener("click", (e) => {
    e.preventDefault();

    if(!blocker){
        blocker = true;

        let blockMonumentActive = blockMonuments.querySelector("._active");
        let blockMonumentNext = blockMonuments.querySelector("._next");
        let blockMonumentPrev = blockMonuments.querySelector("._prev");
    
        blockMonumentActive.style.transition = "all .7s ease";
        blockMonumentPrev.style.transition = "all .7s ease";
    
    
        blockMonumentActive.classList.remove("_active");
        blockMonumentActive.classList.add("_next");

        blockMonumentPrev.classList.remove("_prev");
        blockMonumentPrev.classList.add("_active");
    
        blockMonumentNext.classList.add("none");
        blockMonumentNext.classList.remove("_next");
    

        blockMonumentPrev = (blockMonumentPrev === blockMonuments.firstElementChild) 
            ? blockMonuments.lastElementChild 
            : blockMonumentPrev.previousElementSibling;
    
        blockMonumentPrev.classList.add("_prev");
        blockMonumentPrev.classList.remove("none");


        setTimeout(() => {
            blockMonumentActive.style.transition = "";
            blockMonumentPrev.style.transition = "";

            blocker = false;
        }, 700);
    }
});

buttonLoop.addEventListener("click", (e) => {
    e.preventDefault();

    if(!blocker){
        controlFrameLoop();
    }
});



function controlFrameLoop(){
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
};

function changingFrameLoop(){
    blocker = true;

    
    let blockMonumentActive = blockMonuments.querySelector("._active");

    let blockMonumentNext = blockMonuments.querySelector("._next");
    blockMonumentNext.classList.add("none"); blockMonumentNext.classList.remove("_next");

    let blockMonumentPrev = blockMonuments.querySelector("._prev");
    blockMonumentPrev.classList.add("none"); blockMonumentPrev.classList.remove("_prev");


    do {
        randomMonumentId = Math.floor(Math.random() * 2) + 1;
    } while (randomMonumentId === parseInt(blockMonumentActive.getAttribute('data-monument-id')));

    const foundBlockMonument = document.querySelector(`[data-monument-id="${randomMonumentId}"]`);
    foundBlockMonument.classList.add("_next"); foundBlockMonument.classList.remove("none");


    setTimeout(() => {
        blockMonumentNext = blockMonuments.querySelector("._next");
    
        blockMonumentActive.style.transition = "all .7s ease";
        blockMonumentNext.style.transition = "all .7s ease";
    
    
        blockMonumentActive.classList.remove("_active");
        blockMonumentActive.classList.add("_prev");
    
        blockMonumentNext.classList.remove("_next");
        blockMonumentNext.classList.add("_active");
    }, 50);


    setTimeout(() => {
        blockMonumentActive.style.transition = "";
        blockMonumentNext.style.transition = "";


        blockMonumentActive.classList.remove("_prev"); blockMonumentActive.classList.add("none");

        const newBlockMonumentNext = (foundBlockMonument === blockMonuments.lastElementChild) 
            ? blockMonuments.firstElementChild 
            : foundBlockMonument.nextElementSibling
        ;

        const newBlockMonumentPrev = (foundBlockMonument === blockMonuments.firstElementChild) 
            ? blockMonuments.lastElementChild 
            : foundBlockMonument.previousElementSibling
        ;

        newBlockMonumentNext.classList.remove("none"); newBlockMonumentNext.classList.add("_next");
        newBlockMonumentPrev.classList.remove("none"); newBlockMonumentPrev.classList.add("_prev");


        blocker = false;
    }, 760);
};



// buttonSwitchPrevFrame.addEventListener("click", (e) => {
//     e.preventDefault();

//     if(!blocker){
//         changingNameMonument(0, "prev");
//         changingImgMonument();

//         blocker = true;
//     }
// });

// buttonSwitchNextFrame.addEventListener("click", (e) => {
//     e.preventDefault();

//     if(!blocker){
//         changingNameMonument(0, "next");
//         changingImgMonument();

//         blocker = true;
//     }
// });


// buttonLoop.addEventListener("click", (e) => {
//     e.preventDefault();

//     if(!frameLoop){
//         changingFrameLoop();
//         intervalLoop = setInterval(changingFrameLoop, 3000);
        
//         buttonLoop.classList.add("_stop");
//         buttonLoop.parentNode.querySelector(".tooltip").textContent = "Остановить просмотр";

//         frameLoop = true;
//     } else{
//         clearInterval(intervalLoop);
//         buttonLoop.classList.remove("_stop");
//         buttonLoop.parentNode.querySelector(".tooltip").textContent = "Бесконечный просмотр";

//         frameLoop = false;
//     }
// });



// function changingNameMonument(idFrameSwitching, switchingSide){
//     if(idFrameSwitching === 0){
//         if(switchingSide === "next"){
//             blocks[1].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";
//             blocks[2].style = "opacity: 1; transform: translateY(0px);";
    
//             setTimeout(() => {
//                 blocks[2].classList.add("_active");
//                 blocks[1].classList.remove("_active");
    
//                 blockNameMonument.removeChild(blocks[0]);
//                 blockNameMonument.appendChild(blocks[0]);
    
//                 blocks = document.querySelectorAll('.name_monument__set');
//                 blocks[2].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
//             }, 500);
//         } else if(switchingSide === "prev"){
//             blocks[1].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
//             blocks[0].style = "opacity: 1; transform: translateY(0px);";
    
//             setTimeout(() => {
//                 blocks[0].classList.add("_active");
//                 blocks[1].classList.remove("_active");
    
//                 blockNameMonument.removeChild(blocks[2]);
//                 blockNameMonument.insertBefore(blocks[2], blockNameMonument.firstChild);
    
//                 blocks = document.querySelectorAll('.name_monument__set');
//                 blocks[0].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";
//             }, 500);
//         }
//     } else{
//         blocks[0].querySelector("span").textContent = `${idFrameSwitching}`;

//         blocks[1].style = "opacity: 0; transform: translateY(50px); pointer-events: none;";
//         blocks[0].style = "opacity: 1; transform: translateY(0px);";

//         setTimeout(() => {
//             blocks[0].classList.add("_active");
//             blocks[1].classList.remove("_active");

//             blockNameMonument.removeChild(blocks[2]);
//             blockNameMonument.insertBefore(blocks[2], blockNameMonument.firstChild);

//             blocks = document.querySelectorAll('.name_monument__set');
//             blocks[0].style = "opacity: 0; transform: translateY(-50px); pointer-events: none;";

//             blocks[0].querySelector("span").textContent = `${idFrameSwitching - 1 < 1 ? 3 : idFrameSwitching - 1}`;
//             blocks[2].querySelector("span").textContent = `${idFrameSwitching + 1 > 3 ? 1 : idFrameSwitching + 1}`;
//         }, 500);
//     }
// };

// function changingImgMonument(switchingSide){
//     let numberImg = switchingSide === "next" ? 2 : 0;

//     setsImg[1].style = "opacity: 0; transform: translateY(60px);";
    
//     setTimeout(() => {
//         setsImg[numberImg].style = "opacity: 1; transform: translateY(0px);";
//     }, 500);

//     setTimeout(() => {
//         blockImg.removeChild(setsImg[1]);

//         const newBlockImg = `
//             <div class="img_monument__set">
//                 <img src="/img/section_2/monuments/1.png" alt="">
//             </div>
//         `;
        
//         // blockImg.appendChild(setsImg[0]);
//         // setsImg = blockImg.querySelectorAll(".img_monument__set");
//         // setsImg[1].style = "opacity: 0; transform: translateY(100px);";

//         blocker = false;
//     }, 1050);
// };


// function changingFrameLoop(){
//     const randomNumber = Math.floor(Math.random() * 3) + 1;

//     changingImgMonument();
//     changingNameMonument(randomNumber, "prev");
// };