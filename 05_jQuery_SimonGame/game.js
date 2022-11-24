var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence(){
    
    userClickedPattern = [];

    //increase level
    level++;
    $("h1").text("Level " + level);

    //choose next colour
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //flash
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
    //play audio
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + '.mp3');
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed"); 
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100);
}

//start the game
$("body").keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    //add clicked button to array
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    //play audio
    playSound(userChosenColour);

    //press effect
    animatePress(userChosenColour);

    //check answer
    checkAnswer(userClickedPattern.length-1)
})
  
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(currentLevel == level - 1){
            console.log("success");
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        //Game over
        playSound('wrong');
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}