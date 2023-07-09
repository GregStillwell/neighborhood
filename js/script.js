//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);

      if (i.toString().includes("3")){
      numberArrays[i]= "Wont you be in my neighbor?"
    
    } else if (i.toString().includes("2")) {
      numberArrays[i] = "boop"
    
  }   else if (i.toString().includes("1")) {
    numberArrays[i] = "boop";
  }
  }
  
  return numberArrays
}

 




//Ui Logic

const resetButton= document.getElementById("reset")
function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("textNumber").value)
  

}
  

    
    window.addEventListener("load", function (){
      document.getElementById("inputNumber").addEventListener("submit", handleFormSubmission);
  
    });