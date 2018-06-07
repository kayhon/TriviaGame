// Defined variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
// Trivia Questions and Answer Arrays
     var question = [
"Which two rappers had the worst beef in Hip Hop history?",
"Who is the highest selling hip hop artist?", 
"What artist is not a part of Young Money Entertainment?", 
"How many bars should a rap verse have?", 
"Which of the following rappers are from St. Joseph Missouri?",
"Which of the following is NOT one of the four aspects of hip-hop?", 
"Who's lyrics is this? 'I got em scared, shook, panickin Overseas, church, vatican, You at a stand, still, mannequin You wanna sleep on me? Overnight? Im the motherfn boss overwrite?'", 
"Which Hip Hop Artist has won the most Grammys?"];
    var answer = ["Biggie Smalls v. Tupac", "Eminem", "Lloyd", "16", "Eminem", "Beat boxing", "Nicki Minaj", "Kanye West"];
    var firstChoice = ["Ja Rule v. 50 Cent", "Jay Z", "Lil Twist", "16", "Common", "DJ", "Remy Ma", "Kanye West"];
    var secondChoice = ["Biggie Smalls v. Tupac", "Snoop Dogg", "Lloyd", "12", "Kanye west", "Beat boxing", "Drake", "Emienm"];
    var thirdChoice = ["Kanye West v. 50 Cent", "Tupac Shakur", "Corey Gunz", "14", "T.I.", "B-boying", "Nas", "Jay Z"];
    var fourthChoice = ["LL Cool J v. Kool Moe Dee", "Eminem", "Gudda Gudda", "8", "Eminem", "Graffiti art", "Nicki Minaj", "Lil Wayne"];
// Show & Hide Functions
    function showHolders() {
        $("#questnH").show();
        $("#choiceH-1").show();
        $("#choiceH-2").show();
        $("#choiceH-3").show();
        $("#choiceH-4").show();
    }
    function hideHolders() {
        $("#questnH").hide();
        $("#choiceH-1").hide();
        $("#choiceH-2").hide();
        $("#choiceH-3").hide();
        $("#choiceH-4").hide();
    }
    function hideResults() {
        $("#correctH").hide();
        $("#incorrectH").hide();
        $("#unansweredH").hide();
        $("#restartH").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answrH").hide();
        $("#imageH").hide();
        $("#timeH").show();
        showHolders();
        $("#questnH").html(question[count]);
        $("#choiceH-1").html(firstChoice[count]);
        $("#choiceH-2").html(secondChoice[count]);
        $("#choiceH-3").html(thirdChoice[count]);
        $("#choiceH-4").html(fourthChoice[count]);
  
// Hover CSS
        $("#choiceH-1").hover(function() {
            $(this).css("color", "gray");
        },
    function(){
            $(this).css("color", "black");
        });
        $("#choiceH-2").hover(function() {
            $(this).css("color", "gray");
        },
    function(){
            $(this).css("color", "black");
        });
        $("#choiceH-3").hover(function() {
            $(this).css("color", "gray");
        },
    function(){
            $(this).css("color", "black");
        });
        $("#choiceH-4").hover(function() {
            $(this).css("color", "gray");
        },
    function(){
            $(this).css("color", "black");
        });
    }
        $("#choiceH-1").on("click", checkAnswer) 
        $("#choiceH-2").on("click", checkAnswer)
        $("#choiceH-3").on("click", checkAnswer)
        $("#choiceH-4").on("click", checkAnswer)
// Check Answer Function
    function checkAnswer() {
        hideHolders();
        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answrH").show();
            $("#answrH").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answrH").show();
            $("#answrH").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }
// Check Endgame Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#timeH").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }
    function resetTime() {
        time = 31;
    }
    function displayTime() {
        time--;
        $("#timeH").html("Time remaining: " + time);
   
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answrH").show();
                $("#answrH").html("Times up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }
    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 1500);
            setTimeout(displayQuestion, 2500);
        }
    }
    resetTime();
// Display the Images With the Answer
    function displayImage() {
        if(count === 0) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/pacbig.gif">');
        }
        else if(count === 1) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/shady.gif">');
        }
        else if(count === 2) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/cashmon.gif">');
        }
        else if(count === 3) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/16.gif">');
        }
        else if(count === 4) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/shady2.gif">');
        }
        else if(count === 5) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/hiphop.gif">');
        }
        else if(count === 6) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/nicki.gif">');
        }
        else if(count === 7) {
            $("#imageH").show();
            $("#imageH").html('<img src="assets/images/kanye.gif">');
        }
    }
 // Show the Results Function   
    function showResults() {
        $("#correctH").show();
        $("#correctH").html("Correct: " + correct);
        $("#incorrectH").show();
        $("#incorrectH").html("Incorrect: " + incorrect);
        $("#unansweredH").show();
        $("#unansweredH").html("Unanswered: " + unanswered);
        $("#restartH").show();
        $("#restartH").html("Click Start above to play again!");
    }
// Reset the Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }
// Start the Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }
// Start the Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});