//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);

    if (i.toString().includes("3")){
      numberArrays[i]= "Wont you be in my neighbor?"
    }
    else if(i.toString().includes("2")) {
      numberArrays[I] = "boop"
    }
  }
  
    
  
  
        
  
  return numberArrays
}

 




//Ui Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("textNumber").value)
  console.log(beepboop(userInput))
}
  

    
    window.addEventListener("load", function (){
      document.getElementById("inputNumber").addEventListener("submit", handleFormSubmission);
  
    });