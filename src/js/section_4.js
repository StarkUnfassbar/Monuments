let blockListMonuments = section4.querySelector(".block_list_monuments");
let blockListMonumentsElements = blockListMonuments.querySelectorAll(".list_element");

// let popupInfo = section4.querySelector(".popup_info");
// let popupInfoBody = popupInfo.querySelector(".popup_body");
// let popupInfoContent = popupInfo.querySelector(".popup_content");
// let buttonOpenPopup = popupInfo.querySelector(".button_open_popup");
// let blockerPopupInfo = false;



blockListMonumentsElements.forEach(element => {
	element.addEventListener("click", () => {
		blocker = true;
		let idMonument = parseInt(element.getAttribute('data-monument-id'));

		
		const oldActiveBlockMonument = section2.querySelector(".block_monument._active");
		oldActiveBlockMonument.classList.remove("_active"); oldActiveBlockMonument.classList.add("none");

		const oldPrevBlockMonument = section2.querySelector(".block_monument._prev");
		oldPrevBlockMonument.classList.remove("_prev"); oldPrevBlockMonument.classList.add("none");

		const oldNextBlockMonument = section2.querySelector(".block_monument._next");
		oldNextBlockMonument.classList.remove("_next"); oldNextBlockMonument.classList.add("none");


		const foundBlockMonument = section2.querySelector(`[data-monument-id="${idMonument}"]`);
		foundBlockMonument.classList.remove("none"); foundBlockMonument.classList.add("_active");

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


		setTimeout(() => {
			blocker = false;
			closeSection4();
		}, 50);
	});
});


// buttonOpenPopup.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	if(!popupInfo.classList.contains("_active")){
// 		popupInfo.classList.add("_active");
// 	} else{
// 		popupInfo.classList.remove("_active");
// 	}
// });

// buttonOpenPopup.addEventListener("mouseover", () => {
//     if (!popupInfo.classList.contains("_active") && !blockerPopupInfo) {
//         popupInfo.classList.add("_active");
// 		blockerPopupInfo = true;

// 		setTimeout(() => {
// 			closePopupInfo();
// 			blockerPopupInfo = false;
// 		}, 500);
//     }
// });

// function closePopupInfo(){
// 	popupInfoBody.addEventListener("mouseleave", (e) => {
// 		if (!popupInfoContent.contains(e.relatedTarget) && !blockerPopupInfo) {
// 			blockerPopupInfo = true;
// 			popupInfo.classList.remove("_active");

// 			setTimeout(() => {
// 				blockerPopupInfo = false;
// 			}, 500);
// 		}
// 	});
// };