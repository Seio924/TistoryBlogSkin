var Cards = (function () {
  function init() {
    //bindEvents();
  }

  function bindEvents() {
    // 카드 클릭 이벤트 바인딩
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("click", function () {
        // 카드 클릭 시 동작
      });
    });
  }

  return {
    init: init,
  };
})();
