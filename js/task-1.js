const ulCategories = document.querySelector("#categories")
const categories = ulCategories.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`)

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent
  const categoryItems = category.querySelectorAll("li").length
  console.log(`Category: ${categoryTitle}`)
  console.log(`Elements: ${categoryItems}`)
})