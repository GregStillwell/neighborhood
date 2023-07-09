//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);

  }
  
  const stringArray = numberArrays.map(String);
  
    let newArray = []
    
  stringArray.forEach(function(num) {
    if  (num.includes("1")) {  
      num = "beep"
      
      
    }
  })
  
        
  
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