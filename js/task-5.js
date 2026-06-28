function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", (event) => {
  const bg = getRandomHexColor();
  document.body.style.backgroundColor = bg;
  document.querySelector(".color").textContent = bg;
});