// ----- Header Submenu html요소에 속성 추가하기 -----
let searchEL = document.querySelector(".search");
let inputEL = searchEL.querySelector("header .search>input");

searchEL.addEventListener("click", function(){
  inputEL.focus();
});

inputEL.addEventListener("focus", function(){
  searchEL.classList.add("focused");

  // setAttribute는 querySelect로 찾은 요소에 속성과 값을 추가하는 역할을 함.
  inputEL.setAttribute("placeholder", "통합검색");

});

inputEL.addEventListener("blur", function(){
  searchEL.classList.remove("focused");
  inputEL.setAttribute("placeholder", "");
});



// ----- Header Mainmenu 펼치기 -----
let coffeeEL = document.querySelector(".mainmenu-coffee");

coffeeEL.addEventListener("mouseover", function(){
  coffeeEL.classList.add("hover");
  console.log(coffeeEL);
});

coffeeEL.addEventListener("mouseout", function(){
  coffeeEL.classList.remove("hover");
  console.log(coffeeEL);
});


let menuEL = document.querySelector(".mainmenu-menu");

menuEL.addEventListener("mouseover", function(){
  menuEL.classList.add("hover");
});

menuEL.addEventListener("mouseout", function(){
  menuEL.classList.remove("hover");
});


let storeEL = document.querySelector(".mainmenu-store");

storeEL.addEventListener("mouseover", function(){
  storeEL.classList.add("hover");
});

storeEL.addEventListener("mouseout", function(){
  storeEL.classList.remove("hover");
});


let responEL = document.querySelector(".mainmenu-respon");

responEL.addEventListener("mouseover", function(){
  responEL.classList.add("hover");
});

responEL.addEventListener("mouseout", function(){
  responEL.classList.remove("hover");
});


let rewardsEL = document.querySelector(".mainmenu-rewards");

rewardsEL.addEventListener("mouseover", function(){
  rewardsEL.classList.add("hover");
});

rewardsEL.addEventListener("mouseout", function(){
  rewardsEL.classList.remove("hover");
});


let newEL = document.querySelector(".mainmenu-new");

newEL.addEventListener("mouseover", function(){
  newEL.classList.add("hover");
});

newEL.addEventListener("mouseout", function(){
  newEL.classList.remove("hover");
});