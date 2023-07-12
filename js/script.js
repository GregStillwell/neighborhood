//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i = 0; i <= userNumber; i++) {
    numberArrays.push(i);

    let newArray = [];

    if (i.toString().includes("3")) {
      numberArrays[i] = "Wont you be my neighbor?"

    } else if (i.toString().includes("2")) {
      numberArrays[i] = "boop"

    } else if (i.toString().includes("1")) {
      numberArrays[i] = "beep";

      newArray.push(numberArrays)
    }
  }
  return numberArrays
}


//Ui Logic
window.onload = function () {
  const form = document.querySelector("form");
  const resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", (Event) => {
    document.getElementById("output").innerText = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = parseInt(document.getElementById("textNumber").value)
    const transLat = beepboop(userInput)
    console.log(transLat)
    document.getElementById("output").innerText = transLat;
  })
}


