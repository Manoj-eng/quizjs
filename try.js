var numQues = 5;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(5);

// Insert answers to questions
answers[0] = "Narendra Modi";
answers[1] = "Ramnath Kovind";
answers[2] = "1947";
answers[3] = "True";
answers[4] = "Uttarakhand";

// function to calculate total score
function getScore(form) {
	showCorrectAnswers();

  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
		break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  
  form.solutions.value = correctAnswers;
}


// function to show correct answers

function showCorrectAnswers() {
	var q1Inputs = document.querySelectorAll('.q1-inputs input');
	var correctAnswer = document.querySelector('.q1-inputs span');
	var correct = correctAnswer.textContent;
	q1Inputs.forEach(function(element) {
		if (element.checked) {
			if (element.value !== correct) {
				correctAnswer.classList.remove('hidden');
			} else {
				correctAnswer.classList.add('hidden');
			}
		}
	});
}


var totalQuestions=5;
var TotalChoices=3;
 