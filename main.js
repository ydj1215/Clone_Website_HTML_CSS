// Main
// video-list에서 선택한 video 요소 재생
const videoList = document.querySelectorAll(".video-list div a");
const videoPlayer = document.getElementById("video-player");

videoList.forEach(function (videoItem) {
  videoItem.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지

    // 클릭한 비디오의 소스 URL과 제목
    const videoSource = videoItem.getAttribute("data-source");
    const videoTitle = videoItem.getAttribute("data-title");

    // 동영상 플레이어의 소스와 제목을 업데이트 및 동영상 재생
    videoPlayer.src = videoSource; // 비디오 소스 업데이트
    videoPlayer.parentElement.querySelector("h1").textContent = videoTitle; // 제목 업데이트
    videoPlayer.load();
    videoPlayer.play();
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

// More Video 슬라이드 구현
const more_video_list = document.querySelector(".more_video_list");
const more_video_prev_button = document.querySelector(
  ".more_video_prev_button"
);
const more_video_next_button = document.querySelector(
  ".more_video_next_button"
);
let more_video_list_scroll_position = 0;

more_video_prev_button.addEventListener("click", () => {
  more_video_list_scroll_position -= 30; // 슬라이딩 크기 조절
  if (more_video_list_scroll_position < 0) {
    more_video_list_scroll_position = 150; // 이미지가 처음 이전으로 도달하면 다시 끝으로
  }
  more_video_list.style.transform = `translateX(-${more_video_list_scroll_position}%)`;
});

more_video_next_button.addEventListener("click", () => {
  more_video_list_scroll_position += 30; // 슬라이딩 크기 조절
  if (more_video_list_scroll_position > 150) {
    more_video_list_scroll_position = 0; // 이미지가 끝에 도달하면 다시 처음으로
  }
  more_video_list.style.transform = `translateX(-${more_video_list_scroll_position}%)`;
});

// Gallery
const gallery_list = document.querySelector(".gallery_list");
const gallery_prev_button = document.querySelector(".gallery_prev_button");
const gallery_next_button = document.querySelector(".gallery_next_button");

// Gallery 그리드 박스의 개수
const galleryItems = document.querySelectorAll(".gallery_element");
const numberOfItems = galleryItems.length;

// Gallery 한 페이지 너비 ( + gap)
const galleryElementWidth = (gallery_list.offsetWidth + 10) / numberOfItems;

let gallery_scrollPosition = 0;

gallery_prev_button.addEventListener("click", () => {
  gallery_scrollPosition -= galleryElementWidth;
  if (gallery_scrollPosition < 0) {
    gallery_scrollPosition =
      gallery_list.offsetWidth * ((numberOfItems - 1) / numberOfItems);
  }
  gallery_list.style.transform = `translateX(-${gallery_scrollPosition}px)`;
});

gallery_next_button.addEventListener("click", () => {
  gallery_scrollPosition += galleryElementWidth;
  if (
    gallery_scrollPosition >
    gallery_list.offsetWidth * ((numberOfItems - 1) / numberOfItems)
  ) {
    gallery_scrollPosition = 0;
  }
  gallery_list.style.transform = `translateX(-${gallery_scrollPosition}px)`;
});

// 창 크기 변경 시, gallery_list의 너비를 다시 계산
window.addEventListener("resize", () => {
  galleryElementWidth = (gallery_list.offsetWidth + 10) / numberOfItems;
});

// Shop
const shop = document.querySelector(".shop_gallery");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let scrollPosition = 0;

prevButton.addEventListener("click", () => {
  scrollPosition -= 62.8;
  if (scrollPosition < 0) scrollPosition = 0;
  shop.style.transform = `translateX(-${scrollPosition}%)`;
});

nextButton.addEventListener("click", () => {
  scrollPosition += 62.8;
  if (scrollPosition > 350) scrollPosition = 0;
  shop.style.transform = `translateX(-${scrollPosition}%)`;
});
