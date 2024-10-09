// 헤더 로드 함수
function loadHeader() {
    fetch('header.html')  // 같은 폴더에 있는 경우
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// 푸터 로드 함수
function loadFooter() {
    fetch('footer.html')  // 같은 폴더에 있는 경우
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 페이지 로드 시 헤더와 푸터를 불러옴
window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
