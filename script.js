// 동영상 리스트에서 모든 링크 요소를 선택합니다.
const videoList = document.querySelectorAll(".video-list ul div a");

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
