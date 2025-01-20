let popupVideo = document.querySelector(".popup_video");
let popupContent = popupVideo.querySelector(".popup_content");

let buttonOpenVideo =  document.querySelector("#button-open-video");
let buttonCloseVideo = document.querySelector("#button-close-video");



let swiper = new Swiper('.swiper-container', {
    effect: 'slide',
    
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    navigation: {
        nextEl: '.button_switch_next',
        prevEl: '.button_switch_prev',
    }
});


buttonOpenVideo.addEventListener("click", (e) => {
    e.preventDefault();

    popupVideo.classList.remove("none");
    setTimeout(() => {
        section3.classList.add("_open_video");
    }, 10);
});


buttonCloseVideo.addEventListener("click", (e) => {
    e.preventDefault();
    closeVideo();
});

popupVideo.addEventListener('click', function(e) {
    if (!popupContent.contains(e.target)){
        closeVideo();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});



function closeVideo(){
    section3.classList.remove("_open_video");

    setTimeout(() => {
        popupVideo.classList.add("none");
    }, 510);  
};