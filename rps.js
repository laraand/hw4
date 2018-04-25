var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;

function init(){
	imgPlayer = document.getElementById("imgPlayer");
	btnRock = document.getElementById("btnRock");
	btnPaper = document.getElementById("btnPaper");
	btnScissors = document.getElementById("btnScissors");
}
$("#btnRock").on("click",function(){
	selectRock();
});	
$("#btnPaper").on("click",function(){
	selectPaper();
});
$("#btnScissors").on("click",function(){
	selectScissors();
});


function selectRock(){
	
	$("#imgPlayer").attr("src","images/rock.png");
	
}

function selectPaper(){
	$("#imgPlayer").attr("src","images/paper.png");
}

function selectScissors(){
	$("#imgPlayer").attr("src","images/scissors.png");
}
function computerChoice(){
	var random = Math.random();
	if(random< 0.333){
		return 'rock';
	}else if(random < 0.67777){
		return 'paper';
	}else{
		return 'scissors';
	}
}
function compare(imgPlayer,computerPanel){
	if(imgPlayer === 'rock'){
		if(computerPanel === 'rock'){
			return 'Tie';
		}else if(computerPanel === 'paper'){
			return 'Computer Won';
		}else if(computerPanel === 'scissors'){
			return 'Computer Won';
		}
	}else if(imgPlayer === 'scissors'){
		if(imgPlayer === 'rock'){
			return 'Tie';
		}else if(imgPlayer === 'paper'){
			return 'You Won';
		}else if(imgPlayer === 'scissors'){
			return 'You Won';
		}
	}
}