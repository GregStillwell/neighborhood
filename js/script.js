//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);

  }
  const userNumber = Number(userNumber);
  const stringArray = numberArrays.map(String);

  stringArray.forEach(function(Number) {
    if (numberArrays.includes("1")) {
      numberArrays = "beep"
      console.log(beep)
        }
       
  });
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