//business logic
function beepboop(userNumber) {
  const numberArrays = [];
  for (let i=0; i<=userNumber; i++) {
    numberArrays.push(i);

    let newArray =[];

      if (i.toString().includes("3")){
      numberArrays[i]= "Wont you be in my neighbor?"
    
    } else if (i.toString().includes("2")) {
      numberArrays[i] = "boop"
    
  }   else if (i.toString().includes("1")) {
    numberArrays[i] = "beep";
    
    newArray.push(numberArrays)
    
    
    
  }
  }
  return numberArrays
  
}

  



//Ui Logic
window.onload = function() {
  const form = document.querySelector("form");
  document.getElementById("Reset").addEventListener("click", (Event) => {
    form.reset();
    document.getElementById("output").innerText ="";
  
  });
  

  
  
  

///const resetButton= document.getElementById("reset")
function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("textNumber").value)
  

}
  

    
  //  window.addEventListener("load", function (){
  //    document.getElementById("inputNumber").addEventListener("submit", handleFormSubmission);
}
