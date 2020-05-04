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

function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
  }

function decrement() {
    timeLeft--;
    $("#time-left").html("<p>Time Remaining: " + timeLeft + " Seconds</p>")
    if (timeLeft < 1) {
        stop();
        alert("Time Up!");
    }
  }

  function stop() {
    clearInterval(interval);
  }

// QUESTIONS AND ANSWERS ===========================================================

var questionsArray = [
    {
        question: "What state does Katherine Lundy live in?",
        answers: ["Florida", "Tennessee", "Alabama", "Kentucky"]
    },
    {
        question: "Phil's dog weighs approximately:",
        answers: ["5lbs", "20lbs", "75bs", "150lbs"]
    },
    {
        question: "What sporting equipment can be seen hanging on Estiven Salazar's wall?",
        answers: ["Tennis racket", "Boxing gloves", "Gym towel", "Swim goggles"],
    },
    {
        question: "In the mirror behind Katie Mills, the following is visible:",
        answers: ["A Backstreet Boys poster", "A deer head", "A ceiling fan", "A chandelier"],
    },
    {
        question: "Mason Shadrick mentioned working at the following restaurant:",
        answers: ["McDonald's", "Sonic", "Applebee's", "Macaroni Grill"],
    },
    {
        question: "Who in our class mentioned spreading the gospel on a mission trip?",
        answers: ["Anthony Dowell", "Chip Johnson", "Codie Mitchell", "Jordan Bassett"]
    }
]

// DYNAMICALLY CREATE QUESTIONS AND BUTTONS ===========================================

function createQuiz() {


    $("#time-left").html("<p>Time Remaining: " + timeLeft + " Seconds</p>")


    for (var i=0; i < questionsArray.length; i++){
        newQuestionDiv = $("<div>")
        newQuestionDiv.html(
            "<p>" + questionsArray[i].question + "<p><br>" +
            "<div id='radiobuttons'></div>")
        $("#quiz-body").append(newQuestionDiv)
            for (var j=0; j < questionsArray[i].answers.length; j++){
                var radioBtn = $('<input type="radio" />'); 
                radioBtn.attr("name", "question" + i)
                radioBtn.appendTo("#quiz-body");              
                radioBtnLabel = $("<label>")
                radioBtnLabel.append(questionsArray[i].answers[j])
                radioBtnLabel.appendTo("#quiz-body")
                }
            }
        
    



    $("input:radio").click(function(){
        console.log("I'm a button")
    })

}