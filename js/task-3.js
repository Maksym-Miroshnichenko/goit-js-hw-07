const inputN = document.querySelector("#name-input")
const outputN = document.querySelector("#name-output")

inputN.addEventListener("input", (event) => {
  if (inputN === ""){
    outputN.textContent = "Anonymous"
  } else{
   outputN.textContent = event.currentTarget.value.trim() 
  }
})