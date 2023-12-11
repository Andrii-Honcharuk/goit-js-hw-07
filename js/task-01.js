// ------- 1 ---------
console.log("----------- task-1 -----------");
const listWithUl = document.querySelectorAll("li.item");
console.log(`Numbers of categories: ${listWithUl.length}`);

// ---------- 2 ----------

listWithUl.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryEl = category.querySelectorAll('li');
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
  // console.log(category.lastElementChild.children.length);
});
