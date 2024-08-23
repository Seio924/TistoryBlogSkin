var Sidebar = (function () {
  function init() {
    console.log("sidebar");
    //bindEvents();
    addCategoryIcons(); // 카테고리 아이콘 추가 기능 호출
  }

  function bindEvents() {
    // 사이드바 열기/닫기 이벤트 바인딩
    document
      .querySelector(".sidebar-toggle")
      .addEventListener("click", toggleSidebar);
  }

  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("open");
  }

  function addCategoryIcons() {
    // 카테고리 아이템에 아이콘 추가
    const categoryItems = document.querySelectorAll(".link_item");

    categoryItems.forEach((element, index) => {
      const imgDiv = document.createElement("div");
      imgDiv.className = "category_icon";

      const img = new Image(15, 15);
      img.src = `https://tistory1.daumcdn.net/tistory/7267006/skin/images/category-icon-${
        index + 1
      }.png`;

      imgDiv.appendChild(img);
      element.before(imgDiv);
    });
  }

  return {
    init: init,
  };
})();
