// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
var questions = require("./questions.json");
var basicCard = require("./BasicCard.js");
var inquirer = require('inquirer');
i = 0;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.




if(process.argv[2] === "cloze") {
    clozeGame();
  }
  
  function clozeGame() {
    var askQuestion = new ClozeCard(questions.options[i].text, questions.options[i].cloze);
    
    inquirer.prompt([
      {
        name: "answer",
        message: askQuestion.partial
      }
    ]).then(function (answers) {
      if(answers.answer === askQuestion.cloze) {
        console.log("Correct!");
        console.log("");
      } else {
        console.log("Incorrect! " + questions.options[i].text);
        console.log("");
      }
      if(i < questions.options.length - 1) {
        i+=1;
        clozeGame();
      }
    });
  }




function ClozeCard (text, cloze) {
    if (this instanceof ClozeCard) {
        this.teext = text;
        this.cloze = cloze;
        this.partialText = function (){
            if(this.text.includes(this.cloze)) {
                return this.fullText.replace(this.close, "...");
            } else {
                console.log("ERRRRR, DAWG!")
            }

        };
    } else {
        return new ClozeCard (text, cloze);
    }
};

module.exports = clozeGame;

