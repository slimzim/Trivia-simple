// START BUTTON =================================================================

$(document).ready(function() {
    startButton = $("<button>")
    startButton.html('<button type="button" class="btn gameStart">Start</button>')
    startButton.appendTo("#quiz-body")
})

$(document).on("click", ".gameStart", function(){
    $("#quiz-body").empty()
    run();
    createQuiz();
})
    
// CLOCK SECTION ===================================================================

var timeLeft = 30;
var interval;
var correctCount = 0;
var incorrectCount = 0;

function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
  }

function decrement() {
    timeLeft--;
    $("#time-left").html("<p>Time Remaining: " + timeLeft + " Seconds</p>")
    if (timeLeft < 1) {
        stop();
        console.log("Time Up!");
    }
  }

  function stop() {
    clearInterval(interval);
  }

// QUESTIONS AND ANSWERS ===========================================================

var questionsArray = [
    {
        question: "What state does Katherine Lundy live in?",
        answers: ["Florida", "Tennessee", "Alabama", "Kentucky"],
        correctAnswer: "Florida",
    },
    {
        question: "Phil's dog weighs approximately:",
        answers: ["5lbs", "20lbs", "75lbs", "150lbs"],
        correctAnswer: "75lbs",
    },
    {
        question: "What sporting equipment can be seen hanging on Estiven Salazar's wall?",
        answers: ["Tennis racket", "Boxing gloves", "Gym towel", "Swim goggles"],
        correctAnswer: "Boxing gloves",
    },
    {
        question: "In the mirror behind Katie Mills, the following is visible:",
        answers: ["A Backstreet Boys poster", "A deer head", "A ceiling fan", "A chandelier"],
        correctAnswer: "A ceiling fan",
    },
    {
        question: "Mason Shadrick mentioned working at the following restaurant:",
        answers: ["McDonald's", "Sonic", "Applebee's", "Macaroni Grill"],
        correctAnswer: "Sonic",
    },
    {
        question: "Who in our class mentioned spreading the gospel on a mission trip?",
        answers: ["Anthony Dowell", "Chip Johnson", "Codie Mitchell", "Jordan Bassett"],
        correctAnswer: "Jordan Bassett",
    }
]

// DYNAMICALLY CREATE QUESTIONS AND BUTTONS ===========================================

function createQuiz() {


    $("#time-left").html("<p>Time Remaining: " + timeLeft + " Seconds</p>")


    for (var i=0; i < questionsArray.length; i++){
        newQuestionDiv = $("<div>")
        newQuestionDiv.addClass("question-text")
        newQuestionDiv.html(
            "<p>" + questionsArray[i].question + "<p>" +
            "<div id='radiobuttons'></div>")
        $("#quiz-body").append(newQuestionDiv)
            for (var j=0; j < questionsArray[i].answers.length; j++){
                var radioBtn = $('<input type="radio" />'); 
                radioBtn.attr("name", "question" + i)
                
                if (questionsArray[i].correctAnswer === questionsArray[i].answers[j]) {
                    
                    radioBtn.attr("value", "correct")
                    
                }
                else {
                    radioBtn.attr("value", "incorrect")
                   
                
                }

                radioBtn.appendTo("#quiz-body");              
                radioBtnLabel = $("<label>")
                radioBtnLabel.append(questionsArray[i].answers[j])
                radioBtnLabel.appendTo("#quiz-body")
                }
            }

    $("input[type='button']").click(function(){
        scoreTally = $("input:checked").each(function(){
            if (this.value === "correct"){
                correctCount++;
            }
            else if (this.value === "incorrect"){
                incorrectCount++;
            }
        
        });

        console.log("Correct Answers: " + correctCount)
        console.log("Incorrect Answers: " + incorrectCount)
        
    })
   
}