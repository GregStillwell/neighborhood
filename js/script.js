function 





function handleFormSubmission(event) {
  event.preventDefault();
}
  window.addEventListener("load", function (){
    document.getElementById("inputNumber").addEventListener("submit", handleFormSubmission);
});