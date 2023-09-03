const calculateButton = document.querySelector("#calculate-button");
const usernameInput = document.querySelector("#username-input");
const userHeight = document.querySelector("#user-height");
const userWeight = document.querySelector("#user-weight");
const userBMI = document.querySelector("#final-result");
const personArray = new Array();

function calculateClick() {
    /* console.log(usernameInput.value); */
    let username = usernameInput.value;
    let height = userHeight.value;
    let weight = userWeight.value;
    let result = (weight / ((height * height)/10000)).toFixed(2);
    console.log(result);

    let person = { 
        name: username,
        height: height,
        weight: weight,
        bmi: result,
     };

     addToArray(person);
    
    userBMI.innerHTML = "Your BMI: " + result;
    clearInputFields()

}

function clearInputFields() {
    usernameInput.value = '';
    userHeight.value = '';
    userWeight.value = '';

}

calculateButton.addEventListener("click", calculateClick);

window.addEventListener("keyup", e => {
	e.preventDefault();
  if(e.keyCode === 13) {
  	// console.log("Enter button pressed and calculation done");
    calculateClick();
    clearInputFields()
  }
})

function addToArray(person) {
    personArray.push(person);
    console.log(personArray);
}



















// usernameInput.addEventListener("keyup", e => {
// 	e.preventDefault();
//   if(e.keyCode === 13) {
//   	console.log("Name has been written and Enter is pressed");
//     calculateClick();
//     clearInputFields()
//   }
// })

// userHeight.addEventListener("keyup", e => {
// 	e.preventDefault();
//   if(e.keyCode === 13) {
//   	console.log("Height has been written and Enter is pressed");
//     calculateClick();
//     clearInputFields()
//   }
// })

// userWeight.addEventListener("keyup", e => {
// 	e.preventDefault();
//   if(e.keyCode === 13) {
//   	console.log("Weight has been written and Enter is pressed");
//     calculateClick();
//     clearInputFields() 
//     }
// })