$('#start').on('click', function () {
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "How long did Brendan Eich take to write the JavaScript programming language?",
    answers: ["10 days", "2 weeks", "2 months", "10 months"],
    correctAnswer: "10 days"
}, {
    question: "JavaScript wasn’t always called that. What other name has it been released under?",
    answers: ["Latte", "Mocha", "Bscript", "Spidermonkey"],
    coreectAnswer: "Mocha"
}, {
    question: "Is JavaScript a front-end, back-end, or full-stack programming language?",
    answers: ["Front-end", "Back-end", "Full-stack", "none of the above"],
    correctAnswer: "Full-stack"
}, {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: ["default", "finally", "throw", "undefined"],
    correctAnswer: "undefined"
}, {
    question: "Who created javascript",
    answers: ["Microsoft", "Sun Mirosystems", "Oracle", "Netscape"],
    correctAnswer: "Netscape"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 40,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter === 0) {
            console.log("time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<p>Time Remaining: <span id="counter">20</span>Seconds</p>');
        $('#start').remove;
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<p>' + questions[i].question + '</p>')

            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' class='thing' name='question-" + i + "'  value=' " + questions[i].answers[j] + "'>" + questions[i].answers[j])

            }
        }
        $("#subwrapper").append('<br><button id="end">Done</button>');

    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val().trim() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val().trim() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val().trim() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val().trim() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val().trim()=== questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwraper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3> Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3> Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }


}








