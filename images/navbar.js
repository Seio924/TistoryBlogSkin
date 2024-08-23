var Navbar = (function () {
  function init() {
    // 초기 설정
    //bindEvents();
  }

  function bindEvents() {
    // 네비게이션 바 이벤트 바인딩
    document
      .querySelector(".menu-toggle")
      .addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
  }

  return {
    init: init,
  };
})();
