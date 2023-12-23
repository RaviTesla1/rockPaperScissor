let userValue;
let randomChoice;
let output;
let flag;
const buttons = document.querySelector(".buttons");
const playAgain = document.querySelector("#playAgain");
const finalResult = document.querySelector("#finalResult");


const buttonArray = Array.from(buttons.children);



buttons.addEventListener("click", (e) => {
  userValue = null;
  randomChoice = null;
  flag = null;
  finalResult.innerHTML = null;
  // console.warn("Pressed Button by user",e.target.id)
  if (e.target.tagName === "BUTTON") {
    userValue = e.target.id;
    // console.warn("Pressed target>>", e.target.id);
  } 

    computer();
  function computer() {
    const choices = ["paper", "rock", "scissors"];
    
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
  }
  

  if (typeof userValue === "string" && typeof randomChoice === "string") {
    // Concatenate strings
    console.warn("user Pressed>>",userValue);
    console.warn("computer Pressed>>",randomChoice);
    output = userValue.concat(randomChoice);
    console.warn("Output>>", output); // Output: HelloWorld
    // Function for result called
    let flagReturned = result(output);

  user.innerHTML =   userValue;
  computerScore.innerHTML = randomChoice;

  switch(flagReturned){
    case "Won":
      finalResult.innerHTML = "You Won";
      break;
    case "Lose":
      finalResult.innerHTML = "You Lose"
      break;
    case "Tie":
      finalResult.innerHTML = "Tied"
      break;
    default:
      finalResult.innerHTML = "Invalid Input"
  }
  } else {
    console.log("One or both of the values are not strings.");
  }


  if(output){
    playAgain.innerText = "Play Again"
    // console.warn("First Game ended>>",output);
    playAgain.style.display = "block"
  }


  // return computer();
});







function result(args) {
  const value = args;
  // console.warn("Result", args);
  let flag;

  switch (value) {
    case "rockrock":
      flag = "Tie";
      break;

    case "rockpaper":
      flag = "Lose";
      break;

    case "rockscissors":
      flag = "Won";
      break;

    case "paperrock":
      flag = "Won";
      break;

    case "paperpaper":
      flag = "Tie";
      break;

    case "paperscissors":
      flag = "Lose";
      break;

    case "scissorsrock":
      flag = "Lose";
      break;

    case "scissorspaper":
      flag = "Won";
      break;

    case "scissorsscissors":
      flag = "Tie";
      break;

    default:
      flag = null;
  }

  return flag;
}




const user = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");


playAgain.addEventListener("click",()=>{
  user.innerHTML = 0
  computerScore.innerHTML = 0
  finalResult.innerHTML = 0
})


// Func for getting input from flag

function resu (args){

}


//   console.warn("Output",output);
