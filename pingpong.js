var paddleHeight=170;
var paddleWidth=30;
var ballRadius=25;
var halfPaddleHeight = paddleHeight/2;
var speedofPaddle1 = 0;
var speedofPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 10;
var score1 = 0;
var score2 = 0;
var time = 0;


function startBall(){

    topPositionOfBall = 510;
    leftPositionOfBall = 820;

    if(Math.random() < 0.4){
        var side = 1;
    }
    else{
        var side = -1;
    }
    leftSpeedOfBall = side *(Math.random() *5 + 5)
    topSpeedOfBall = Math.random() *6 +5;


}

document.addEventListener('keydown',function(e){
   //w
    if(e.keycode == 87 || e.which == 87){
        speedofPaddle1 = -10;
    }
    //S
    if(e.keycode == 83 || e.which == 83){
        speedofPaddle1 = 10;
    }
    //UP
    if(e.keycode == 38 || e.which == 38 ){
        speedofPaddle2 = -10;
    }
    //DOWN
    if(e.keycode == 40 || e.which == 40){
        speedofPaddle2 = 10;
    }

})

document.addEventListener('keyup',function(e){
    //w
     if(e.keycode == 87 || e.which == 87){
         speedofPaddle1 = 0;
     }
     //S
     if(e.keycode == 83 || e.which == 83){
         speedofPaddle1 = 0;
     }
     //UP
     if(e.keycode == 38 || e.which == 38 ){
         speedofPaddle2 = 0;
     }
     //DOWN
     if(e.keycode == 40 || e.which == 40){
         speedofPaddle2 = 0;
     }
 
 })

window.setInterval(function show(){

    positionOfPaddle1+=speedofPaddle1;
    positionOfPaddle2+=speedofPaddle2;
     // topun hızı ve pozisyonu
    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;
    
    // stop paddle from leaving top of window
    if(positionOfPaddle1<=1){
        positionOfPaddle1 =1;
    }
    if(positionOfPaddle2<=1){
        positionOfPaddle2 =1;
    }
    // stop paddle form leaving button of window
    if(positionOfPaddle1>= window.innerHeight-paddleHeight){
        positionOfPaddle1 = window.innerHeight-paddleHeight
    }
    if(positionOfPaddle2>= window.innerHeight-paddleHeight){
        positionOfPaddle2 = window.innerHeight-paddleHeight
    }
    // üstten ve alttan engel
    if(topPositionOfBall <=10 || topPositionOfBall >= window.innerHeight - ballRadius){
        topSpeedOfBall = -topSpeedOfBall
        var audio = new Audio('sounds/wall.wav');
            audio.play()
    }
    if(leftPositionOfBall<= paddleWidth){
        if(topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight){
            leftSpeedOfBall = - leftSpeedOfBall;
            var audio = new Audio('sounds/ding.wav');
            audio.play()
        }
        else{
            
            score2++
            var audio = new Audio('sounds/punch.wav');
            audio.play()
            clearInterval(d);
            time = 0;
            d = setInterval(x,1000);
            startBall();
        }
        
    }
    if(leftPositionOfBall >= window.innerWidth - ballRadius -paddleWidth){
        if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
            leftSpeedOfBall = - leftSpeedOfBall;
            var audio = new Audio('sounds/ding.wav');
            audio.play()
        }
        else{
            score1++
            var audio = new Audio('sounds/hs.wav');
            audio.play()
            clearInterval(d);
            time = 0;
            d = setInterval(x,1000);
            startBall();

        }
       
    }

    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

    document.getElementById('ball').style.top = topPositionOfBall +'px';
    document.getElementById('ball').style.left = leftPositionOfBall +'px';

    document.getElementById('score1').innerHTML = score1.toString()
    document.getElementById('score2').innerHTML = score2.toString()

    


}, 1000/60)

function x(){
    var timer = document.getElementById('count').innerHTML = time;
    time++;
}

var d = setInterval(x,1000);




        
        
