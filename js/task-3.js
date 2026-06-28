const inputN = document.querySelector("#name-input")
const outputN = document.querySelector("#name-output")

inputN.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  
  if (trimmedValue === ""){
    outputN.textContent = "Anonymous"
  } else{
   outputN.textContent = trimmedValue
  }
})