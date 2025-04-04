let buttonsTransition = document.querySelectorAll(".button_transition");

let sectionContainer = document.querySelector(".section_container");
let sectionActive;

let section0 = document.querySelector("#section-0");
let buttonCloseSection0 = section0.querySelector(".button_close");

let section1 = document.querySelector("#section-1");
let buttonsLogo = document.querySelectorAll(".button_logo");
let buttonContinue = document.querySelector("#button-continue");
let buttonStart = document.querySelector("#button-start");

let section2 = document.querySelector("#section-2");
let buttonListMonuments = document.querySelector("#button-list-monuments");
let buttonInfoMonument = document.querySelector("#button-info-monument");

let section3 = document.querySelector("#section-3");
let buttonCloseSection3 = section3.querySelector(".button_close");

let section4 = document.querySelector("#section-4");
let buttonCloseSection4 = section4.querySelector(".button_close");



setTimeout(() => {
    section1.classList.add("_active");
    changingTransitionButtonLogoOnSection1();
}, 500);


// buttonContinue.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	const blockText = section1.querySelector(".block_text.initial");
// 	blockText.querySelector("h1").classList.add("_hidden");
// 	blockText.querySelector("p").classList.add("_hidden");
// 	blockText.querySelector(".button_continue").classList.add("_hidden");

// 	setTimeout(() => {
// 		blockText.classList.add("none");

// 		const blockTextNext = section1.querySelector(".block_text:not(.initial)");
// 		blockTextNext.classList.remove("none");

// 		setTimeout(() => {
// 			blockTextNext.classList.remove("_hidden");
// 		}, 50);
// 	}, 1100);
// });


buttonStart.addEventListener("click", (e) => {
    e.preventDefault();

    sectionActive = document.querySelector("section._active");
    transitionSection2();
});


buttonInfoMonument.addEventListener("click", (e) => {
    e.preventDefault();

    sectionActive = document.querySelector("section._active");
    transitionSection3();
});

buttonListMonuments.addEventListener("click", (e) => {
    e.preventDefault();

    sectionActive = document.querySelector("section._active");
    transitionSection4();
});


buttonsLogo.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        sectionActive = document.querySelector("section._active");
        transitionSection0();
    });
});


buttonCloseSection0.addEventListener("click", (e) => {
    e.preventDefault();
    closeSection0(sectionActive, sectionActive.getAttribute("id"));
});

buttonCloseSection3.addEventListener("click", (e) => {
    e.preventDefault();
    closeSection3();
});

buttonCloseSection4.addEventListener("click", (e) => {
    e.preventDefault();
    closeSection4();
});



function transitionSection0(){
    sectionContainer.classList.add("_blackout");
    sectionActive.classList.add("_hidden");

    setTimeout(() => {
        sectionActive.classList.add("none");
        sectionActive.classList.remove("_active");
        sectionActive.classList.remove("_hidden");
        
        changingTransitionButtonLogoOnSection1();


        section0.classList.remove("none");
    }, 1300);

    setTimeout(() => {
        sectionContainer.classList.add("_corners_on");
        sectionContainer.classList.add("_ellipse_on");
    }, 1400);

    setTimeout(() => {
        section0.classList.add("_active");
    }, 2000);
};

function closeSection0(sectionTransition, transitionId){
    if(transitionId === "section-1"){
        sectionContainer.classList.remove("_corners_on");
        sectionContainer.classList.remove("_ellipse_on");

        section0.classList.add("_hidden");

        setTimeout(() => {
            section0.classList.add("none");
            section0.classList.remove("_active");
            section0.classList.remove("_hidden");

            sectionTransition.classList.remove("none");
        }, 1000);
    
        setTimeout(() => {
            sectionTransition.classList.add("_active");
            changingTransitionButtonLogoOnSection1();
        }, 1100);
    } else if(transitionId === "section-2"){
        sectionContainer.classList.remove("_blackout");
        sectionContainer.classList.remove("_corners_on");

        section0.classList.add("_hidden");

        setTimeout(() => {
            section0.classList.add("none");
            section0.classList.remove("_active");
            section0.classList.remove("_hidden");

            sectionTransition.classList.remove("none");
        }, 1000);
    
        setTimeout(() => {
            sectionTransition.classList.add("_active");
        }, 1100);
    } else if(transitionId === "section-3"){
        sectionContainer.classList.remove("_blackout");
        sectionContainer.classList.remove("_ellipse_on");

        section0.classList.add("_hidden");

        setTimeout(() => {
            section0.classList.add("none");
            section0.classList.remove("_active");
            section0.classList.remove("_hidden");

            sectionTransition.classList.remove("none");
        }, 1000);
    
        setTimeout(() => {
            sectionTransition.classList.add("_active");
        }, 1100);
    }
};


function transitionSection2(){
    sectionActive.classList.add("_hidden");

    setTimeout(() => {
        sectionActive.classList.add("none");
        sectionActive.classList.remove("_active");
        sectionActive.classList.remove("_hidden");
        
        changingTransitionButtonLogoOnSection1();


        section2.classList.remove("none");
    }, 1300);

    setTimeout(() => {
        sectionContainer.classList.remove("_blackout");
        sectionContainer.classList.add("_ellipse_on");
    }, 1200);

    setTimeout(() => {
        section2.classList.add("_active");
    }, 1800);
};


function transitionSection3(){
	let blockMonumentActive = blockMonuments.querySelector("._active");
	let idMonumentActive = parseInt(blockMonumentActive.getAttribute('data-monument-id'));

	if(idMonumentActive){
		createInfoSlider(idMonumentActive);


		sectionActive.classList.add("_hidden");

		setTimeout(() => {
			sectionActive.classList.add("none");
			sectionActive.classList.remove("_active");
			sectionActive.classList.remove("_hidden");
			
			changingTransitionButtonLogoOnSection1();


			section3.classList.remove("none");
		}, 1300);

		setTimeout(() => {
			sectionContainer.classList.remove("_ellipse_on");
			sectionContainer.classList.add("_corners_on");
		}, 1000);

		setTimeout(() => {
			section3.classList.add("_active");
		}, 1700);	
	}
};

function closeSection3(){
    sectionContainer.classList.remove("_corners_on");
    sectionContainer.classList.add("_ellipse_on");

    section3.classList.add("_hidden");

    setTimeout(() => {
        section3.classList.add("none");
        section3.classList.remove("_active");
        section3.classList.remove("_hidden");

        section2.classList.remove("none");
    }, 1000);

    setTimeout(() => {
        section2.classList.add("_active");
        changingTransitionButtonLogoOnSection1();

		if(swiper){
			swiper.destroy(true, true);
			swiper = null;
		}
    }, 1100);
};


function transitionSection4(){
    sectionActive.classList.add("_hidden");

    setTimeout(() => {
        sectionActive.classList.add("none");
        sectionActive.classList.remove("_active");
        sectionActive.classList.remove("_hidden");
        
        changingTransitionButtonLogoOnSection1();


        section4.classList.remove("none");
    }, 1300);

    setTimeout(() => {
        sectionContainer.classList.add("_ellipse_on");
        sectionContainer.classList.add("_blackout");
    }, 1000);

    setTimeout(() => {
        section4.classList.add("_active");
    }, 1700);
};

function closeSection4(){
    sectionContainer.classList.remove("_blackout");

    section4.classList.add("_hidden");

    setTimeout(() => {
        section4.classList.add("none");
        section4.classList.remove("_active");
        section4.classList.remove("_hidden");

        section2.classList.remove("none");
    }, 1000);

    setTimeout(() => {
        section2.classList.add("_active");
        changingTransitionButtonLogoOnSection1();
    }, 1100);
};


function changingTransitionButtonLogoOnSection1(){
    if(section1.classList.contains("_active")){
        setTimeout(() => {
            section1.querySelector(".button_logo").style = "transition: all .5s ease;";
        }, 1500);
    } else{
        section1.querySelector(".button_logo").style = "transition: all .5s ease .9s;";
    }
};