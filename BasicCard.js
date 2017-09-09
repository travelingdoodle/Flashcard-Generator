// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
// module.exports = BasicCard;
var cloze = require("./ClozeCard");
var inquirer = require('inquirer');
var questions = require("./questions.json");
i = 0;
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.
if(process.argv[2] === "basic") {
    basicGame();
  }
  
  function basicGame() {
  
    var askQuestion = new BasicCard(questions.options[i].front, questions.options[i].back);
  
    inquirer.prompt([
      {
        name: "answer",
        message: askQuestion.front
      }
    ]).then(function (answers) {
      if(answers.answer === askQuestion.back) {
        console.log("Correct!");
        console.log("");
      } else {
        console.log("Incorrect! " + questions.options[i].text);
        console.log("");
      }
      if(i < questions.options.length - 1) {
        i+=1;
        basicGame();
      }
    });
  }
  
function BasicCard (front, back) {
    // instanceof handles the removal of the 'new' keyword when creating a new instance
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back
    } else {
        return new BasicCard (front, back);
    }
};

module.exports = basicGame;