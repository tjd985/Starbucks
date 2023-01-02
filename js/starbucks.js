// ----- go top 버튼 스크롤 값에따라 나타내고 숨기기 -----
// ----- Header Banner lodash와 gsap을 통해 애니메이션 효과 넣기 -----
// _.throttle(함수, 시간) -> 스크롤을 할때 함수가 일정시간에 한번씩만 실행 되도록 제한을 거는 lodash 라이브러리
const bannerEL = document.querySelector(".header-banner");
const goTopEL = document.querySelector(".go-top");

window.addEventListener("scroll", _.throttle(
  function(){
    // window.scrollY -> Y축으로 스크롤을 내릴때 내리는 만큼의 위치를 숫자로 표시하는값.
    console.log(window.scrollY);

    if(window.scrollY > 500){
      // gsap.to(요소, 지속시간, 옵션); -> html요소에 애니메이션 효과를 넣는 라이브러리
      gsap.to(bannerEL, .6, {
        opacity: 0,
        display: "none"
      });

      // gsap.to(요소, {rotation, 이동방향(x축 y축): 이동거리, 적용시간});
      gsap.to(goTopEL, {rotation: 0, x: 0, duration: .4});
    } else{
      gsap.to(bannerEL, .6, {
        opacity: 1,
        display: "block"
      });
      
      gsap.to(goTopEL, {rotation: 0, x: 100, duration: .4});
    }
  }, 300));



  // ----- go top 버튼 누루면 화면 맨위로 이동하기 -----
  goTopEL.addEventListener("click", function(){
    gsap.to(window, .7, {
      scrollTo: 0         // goTopEL이 클릭되면 window(html)을 0으로 0.7초에 걸쳐서 이동시킴.
    });
  });



// ----- section 사진 순차적으로 보이기 -----
let sectionELS = document.querySelectorAll(".fade-in");

sectionELS.forEach(function(sectionEL, index){
  gsap.to(sectionEL, 1, {
    // 각 요소마다 0.7초간의 간격을 두어서 나타나게 함
    delay: (index + 1)* .7, //  0.7 1.4 2.1 2.8 ...
    opacity: 1
  });
});



// ----- notice부분 요소 수직 슬라이드 -----
// ner Swiper(선택자, 옵션)
new Swiper(".notice__line .swiper-container", {
  direction: "vertical",  // 슬라이드 방향 설정
  autoplay: true,  // 자동으로 슬라이드 여부
  loop: true  // 반복재생 여부
});



// ----- promotion부분 수평 슬라이드 -----
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드의 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //  1번 슬라이드가 가운데로 보이게 하기
  autoplay: {
    delay: 4000 //  자동넘김 딜레이 설정(기본값 3000 = 3s)
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination", //  페이지 번호 요소 선택자
    clickable: true,  // 페이지네이션을 클릭해서 해당 페이지로 이동 가능한지
  },
  navigation: {
    prevEl: ".promotion .swiper-btn-prev", //  이전페이지 버튼
    nextEl: ".promotion .swiper-btn-next"  //  이후페이지 버튼
  }
});



// ----- notice에서 버튼으로 promotion 숨기기 -----
let noticeEL = document.querySelector(".notice .inner>.inner__right .material-icons");
let promotionEL = document.querySelector(".promotion");

noticeEL.addEventListener("click", function(){
  if(promotionEL.className == "promotion hide"){
    promotionEL.classList.remove("hide");
    console.log(promotionEL);
  } else{
    promotionEL.classList.add("hide");
    console.log(promotionEL);
  }
});



// ----- youtube위에 floating아이콘 띄우기 -----
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selecter, delay, size){
  gsap.to(selecter, random(1, 2.5), {
    y: size,  //  y축방향으로 얼마나 이동할것인가
    repeat: -1, //  repeat: -1 : 무한으로 반복하게 함.
    yoyo: 1,  //  애니메이션이 한번 진행되고 자연스럽게 다시 돌아오게 함.
    ease: "power1.inOut", //  애니메이션 실행 속도
    delay: random(0, delay) // 애니메이션을 시작 하기 전 딜레이 시간 설정.
  });
}

floatingObject(".youtube>.inner>img:first-child", 1, 20); //  floating 1
floatingObject(".youtube>.inner>img:nth-child(2)", .5, 15); //  floating 2
floatingObject(".blending>.inner>.float--image", 1.5, 20); //  floating 3




// ----- blending section에 아이콘 슬라이드되서 나오게 하기 -----
const spyELs = document.querySelectorAll("section.scroll-spy");
spyELs.forEach(function(spyEL){
  new ScrollMagic
      .Scene({
        triggerElement: spyEL,  //  보여짐 요소를 감시할 요소를 지정해줌.
        triggerHook: .8   // 내가 감시하고있는 요소가 viewport에서 0 ~ 1중 한개의 수에 갈고리(hook)을 걸어놓고
                          // 그 지점을 지나는지 검사하는 요소

      })
      .setClassToggle(spyEL, "show")  //  따라서 spyEl이 화면의 0.8을 넘어서는 순간 show라는 클래스 이름을 추가함.
      .addTo(new ScrollMagic.Controller());
});




// ----- awards부분 수평 슬라이드 -----
new Swiper(".awards .swiper-container", {
  slidesPerView: 5, // 한번에 보여줄 슬라이드의 개수
  spaceBetween: 10, //슬라이드 사이 여백
  autoplay: {
    delay: 3000 //  자동넘김 딜레이 설정(기본값 3000 = 3s)
  },
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-btn-prev", //  이전페이지 버튼
    nextEl: ".awards .swiper-btn-next"  //  이후페이지 버튼
  }
});
