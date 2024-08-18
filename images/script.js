const subCategorys = document.querySelectorAll(".sub_category_list");

for (let subCategory of subCategorys) {
  subCategory.style.display = "none";
}

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
