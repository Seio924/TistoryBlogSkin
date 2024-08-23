// 모든 모듈 초기화
function initializeModules() {
  Navbar.init();
  Sidebar.init();
  Cards.init();
}

// 이벤트 바인딩
function bindEvents() {
  // 전역적인 이벤트 바인딩 (예: 스크롤, 리사이즈)
}

// 초기화 함수
function init() {
  initializeModules();
  bindEvents();
}

// 페이지 로드 후 초기화 실행
document.addEventListener("DOMContentLoaded", init);
