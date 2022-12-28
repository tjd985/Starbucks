// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {  //  html의 <div id="player"></div>
    videoId: 'An6LvWQuj_8', //  내가 삽입하려는 영상의 아이디 값(주소창에 있음)
    playerVars: {
      autoplay: 1, //  자동재생 유무
      loop: true, //  반복재생 유무
      playlist: "An6LvWQuj_8" //  반복재생할 영상의 목록
    },
    events: {
      // onReady함수는 영상이 준비가 되면 실행되는 메소드
      onReady: function(event){
        event.target.mute() //  음소거 
      }
    }
  });
}