// ------- 1 ---------
console.log("----------- task-1 -----------");
const listWithUl = document.querySelectorAll("li.item");
console.log(`Numbers of categories: ${listWithUl.length}`);

// ---------- 2 ----------

listWithUl.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryEl = category.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryEl.length}`);
});
