// Main
// 동영상 리스트에서 모든 링크 요소를 선택합니다.
const videoList = document.querySelectorAll(".video-list div a");

// 비디오 플레이어 엘리먼트를 선택합니다.
const videoPlayer = document.getElementById("video-player");

// 동영상 리스트의 각 비디오 링크에 클릭 이벤트를 추가합니다.
videoList.forEach(function (videoItem) {
  videoItem.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지

    // 클릭한 비디오의 소스 URL과 제목을 가져옵니다.
    const videoSource = videoItem.getAttribute("data-source");
    const videoTitle = videoItem.getAttribute("data-title");

    // 동영상 플레이어의 소스와 제목을 업데이트하고 동영상을 로드하고 재생합니다.
    videoPlayer.src = videoSource; // 비디오 소스 업데이트
    videoPlayer.parentElement.querySelector("h1").textContent = videoTitle; // 제목 업데이트
    videoPlayer.load(); // 비디오 로드
    videoPlayer.play(); // 비디오 재생
  });
});

// More Video
// More Video 링크 연결
const PlayButton_1 = document.querySelector(".play_box_1");
PlayButton_1.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=KTJQdbvCMag", "_blank");
});

const PlayButton_2 = document.querySelector(".play_box_2");
PlayButton_2.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=83sdwFOL1r8", "_blank");
});

const PlayButton_3 = document.querySelector(".play_box_3");
PlayButton_3.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=xWtLw83_jE0", "_blank");
});

const PlayButton_4 = document.querySelector(".play_box_4");
PlayButton_4.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=UPKWCCh4fPU", "_blank");
});

const PlayButton_5 = document.querySelector(".play_box_5");
PlayButton_5.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=kssoXnSwMSQ", "_blank");
});

const PlayButton_6 = document.querySelector(".play_box_6");
PlayButton_6.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=Fl2W6FZ-etQ&t=3s", "_blank");
});

// Gallery

// Shop
const shop = document.querySelector(".shop_gallery");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let scrollPosition = 0;

prevButton.addEventListener("click", () => {
  scrollPosition -= 62.8; // 슬라이딩 크기 조절
  if (scrollPosition < 0) scrollPosition = 0;
  shop.style.transform = `translateX(-${scrollPosition}%)`;
});

nextButton.addEventListener("click", () => {
  scrollPosition += 62.8; // 슬라이딩 크기 조절
  // 이미지가 끝에 도달하면 다시 처음으로
  if (scrollPosition > 350) scrollPosition = 0;
  shop.style.transform = `translateX(-${scrollPosition}%)`;
});
