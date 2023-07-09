//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);
    
  }
  return numberArrays

}

const arrayStrings = ["beepboop", "beep" , "wont you be my neighbor"];
console.log(arrayStrings)



// if (userNumber.includes()


//Ui Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("textNumber").value)
  console.log(beepboop(userInput))
}
  

    
    window.addEventListener("load", function (){
      document.getElementById("inputNumber").addEventListener("submit", handleFormSubmission);
  
});