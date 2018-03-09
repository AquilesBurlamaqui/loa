function Personagem() {
  this.x=random(800);
  this.y=random(500);
  this.largura=50;
  this.altura=50;
	this.somaX=1;  
  this.somaY=1;
	this.r=random(1,255);
	this.g=random(1,255);
	this.b=random(1,255);
  
  this.desenhar = function() {
		 fill(this.r, this.g, this.b);
     ellipse(this.x, this.y, this.largura, this.altura);
  }
}

var jogador;
var inimigos = [];
var num_inimigos = 1;
var pause=false;

function setup() {
   createCanvas(900, 600);
   jogador = new Personagem();
   inimigos[0] = new Personagem();
   poder = new Personagem();
}

function keyPressed() {
  if (keyCode == 80) {
		if(pause==false) {
					 noLoop();
					 pause=true;
				} else {
					loop();
					pause=false;
				}
	}
	if(keyCode == 67) {
		inimigos[num_inimigos]=new Personagem();
		num_inimigos++;
	}
}

function draw() {
  
 
  text("Pontos:", 10, 60);
  
  background(0);
  if (keyIsDown(LEFT_ARROW))
    jogador.x-=5;

  if (keyIsDown(RIGHT_ARROW))
    jogador.x+=5;

  if (keyIsDown(UP_ARROW))
    jogador.y-=5;

  if (keyIsDown(DOWN_ARROW))
    jogador.y+=5;
	
  jogador.desenhar();
  poder.desenhar();
  for(i=0;i<num_inimigos;i++) {
		  inimigos[i].x=inimigos[i].x+(inimigos[i].somaX*10);
			inimigos[i].y=inimigos[i].y+(inimigos[i].somaY*10);

			if (inimigos[i].x > width){
				inimigos[i].somaX=-1;
			}
			if (inimigos[i].x < 0){
				inimigos[i].somaX=1;
			}
			if(inimigos[i].y>height) {
				inimigos[i].somaY=-1;
			}
			if(inimigos[i].y<0) {
				inimigos[i].somaY=1;
			}
			inimigos[i].desenhar();
		  if(colisao(jogador,inimigos[i])){
   		 //alert("Bum!");
  		}
	}
}

	function colisao(obj1, obj2) {
				if(obj1.x > obj2.x + obj2.largura)
					return false;
				if(obj1.y > obj2.y + obj2.altura)
					return false;
				if(obj1.x + obj1.largura < obj2.x)
					return false;
				if(obj1.y + obj1.altura < obj2.y)
					return false;
				return true;
	}

