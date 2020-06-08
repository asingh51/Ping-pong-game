/* Akshay Bahuguna, 1001624304 */

var ball,court,strikes,maxscore,paddle,speed,posx,posy,max=0;

function initialize(){

 	ball = document.getElementById("ball");
	court = document.getElementById("court");
	paddle = document.getElementById("paddle");
	strikes = document.getElementById("strikes");
	maxscore = document.getElementById("score");
	console.log('initialized ! '+ball.offsetTop);
	speed=0,posx=0,posy=0;
}

var paddle;

function movePaddle(event){

	var y = event.pageY;
	if(y<=court.offsetTop){
		paddle.style.top = 0+'px';
	}else if(y+100>=court.offsetTop+court.getBoundingClientRect().height){
		paddle.style.top = 400+'px';
	}else{
		paddle.style.top = y-court.offsetTop+'px';
	}
}

function startGame(){

	var interval,count=0;

	posy= ball.offsetTop-court.offsetTop-80;
	var angle = Math.floor(Math.random()*90)-45;
	var deltax = Math.cos(angle*Math.PI/180)*7;
	var deltay = Math.sin(angle*Math.PI/180)*7;

		switch(speed){
		case 0:
			interval = 25;
			break;
		case 1:
			interval = 15;
			break;
		case 2:
			interval = 10;
			break;
		case undefined:
			interval = 25;
			break;
	}
	var fun = setInterval(moveBall, interval);

	function moveBall(){
		console.log(ball.offsetTop,posy);
			if((posx >=750)&&(ball.offsetTop>= paddle.offsetTop && ball.offsetTop<= paddle.offsetTop+100)){
				count++;
				strikes.innerHTML = count;
				deltax=deltax*-1;
			}
		 else if(posx<court.getBoundingClientRect().left-8){
			deltax=deltax*-1;
		}else if(ball.offsetTop <= court.offsetTop || ball.offsetTop>= court.getBoundingClientRect().height+court.offsetTop-20){
			deltay=deltay*-1;
		}else if(posx>=777){
			clearInterval(fun);
			max =  (count>max)?count:max;
			maxscore.innerHTML = (count>max)?count:max;
			strikes.innerHTML = 0;
			alert('GAME OVER! Your score: '+count);
		}
		posx=posx+deltax;
		posy=posy+deltay;
		ball.style.left = posx+'px';
		ball.style.top = posy+'px';
	}
}

function resetGame(){
	ball.style.left=0+'px';
	ball.style.top=Math.floor(Math.random()*400)+'px';
	initialize();
}

function setSpeed(speede){
	if(speede==0){
		speed = 0;
	}else if(speede==1){
		speed =1;
	}else if(speede==2){
		speed = 2;
	}
}
