var tela = 1, c=0;
var largura = 170,altura =50,larg=100,alt=20,lar=160,H=50;
var x = 255,z=130,w=353;
var y1 = 130, y2 = 200, y3 = 267;
var run=[],cont=0,tempo=0, idle=[],x1=0,y=330,mode=0;
var idle2=[], walk=[];
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('music1.mp3');
    //tela1
  img1=loadImage('boy.png');
  img2=loadImage('girl.png');
  img3=loadImage('nuvens.png');
  img4=loadImage('grass.png');
  img5=loadImage('areia.png');
  img6=loadImage('grass.png');  
  img7=loadImage('tree.png');
    //tela4
  imgw=loadImage('will.jpg');
  imga=loadImage('alef.jpg');
  //animação - tela 5
   idle[0]=loadImage('Idle 1.png');
   idle[1]=loadImage('Idle 2.png')
   idle[2]=loadImage('Idle 3.png');
   idle[3]=loadImage('Idle 4.png');
   idle[4]=loadImage('Idle 5.png');
   idle[5]=loadImage('Idle 6.png');
   idle[6]=loadImage('Idle 7.png');
   idle[7]=loadImage('Idle 8.png');
   idle[8]=loadImage('Idle 9.png');
   idle[9]=loadImage('Idle 10.png');
   idle[10]=loadImage('Idle 11.png');
   idle[11]=loadImage('Idle 12.png');
   idle[12]=loadImage('Idle 13.png');
   idle[13]=loadImage('Idle 14.png');
   idle[14]=loadImage('Idle 15.png');
  
  run[0]=loadImage('Run 1.png');
  run[1]=loadImage('Run 2.png');
  run[2]=loadImage('Run 3.png');
  run[3]=loadImage('Run 4.png');
  run[4]=loadImage('Run 5.png');
  run[5]=loadImage('Run 6.png');
  run[6]=loadImage('Run 7.png');
  run[7]=loadImage('Run 8.png');
  run[8]=loadImage('Run 9.png');
  run[9]=loadImage('Run 10.png');
  run[10]=loadImage('Run 11.png');
  run[11]=loadImage('Run 12.png');
  run[12]=loadImage('Run 13.png');
  run[13]=loadImage('Run 14.png');
  run[14]=loadImage('Run 15.png');
  //Animação-tela 6
  idle2[0]=loadImage('Idle (1).png');
  idle2[1]=loadImage('Idle (2).png');
  idle2[2]=loadImage('Idle (3).png');
  idle2[3]=loadImage('Idle (4).png');
  idle2[4]=loadImage('Idle (5).png');
  idle2[5]=loadImage('Idle (6).png');
  idle2[6]=loadImage('Idle (7).png');
  idle2[7]=loadImage('Idle (8).png');
  idle2[8]=loadImage('Idle (9).png');
  idle2[9]=loadImage('Idle (10).png');
  idle2[10]=loadImage('Idle (11).png');
  idle2[11]=loadImage('Idle (12).png');
  
  walk[0]=loadImage('Girl 1.png');
  walk[1]=loadImage('Girl 2.png');
  walk[2]=loadImage('Girl 3.png');
  walk[3]=loadImage('Girl 4.png');
  walk[4]=loadImage('Girl 5.png');
  walk[5]=loadImage('Girl 6.png');
  walk[6]=loadImage('Girl 7.png');
  walk[7]=loadImage('Girl 8.png');
  walk[8]=loadImage('Girl 9.png');
  walk[9]=loadImage('Girl 10.png');
  walk[10]=loadImage('Girl 11.png');
  walk[11]=loadImage('Girl 12.png');
  ///////
  img8=loadImage('copo.png');
  img9=loadImage('ferro.jpg');
  img10=loadImage('wood.png');
  img11=loadImage('predios.png');
  img12=loadImage('lamp.jpg');
  img13=loadImage('fogos.jpg');
}
function setup() {
  createCanvas(700, 470);
   mySound.play();
}

function draw() {
  textStyle(BOLDITALIC);
  // Tela de Menu ok
  if (tela == 1) {
    background(0);
     mySound.setVolume(0.1);
     c++;
     mySound.setVolume(0.1);
    // Menu com duas opçoes 
    // Iniciar jogo
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    //paisagem
    image(img3,0,0,700,320);
    image(img6,0,310,700,70);
    image(img5,0,380,700,60);
    image(img4,0,440,700,30);
       //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
    //Personagens 
    image(img1,80,280,70,150);
    image(img2,525,280,70,150);
    //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    
    textSize(26) 
    if(mouseX > x && mouseX < x + largura && mouseY > y1 && mouseY < y1 + altura){
     stroke(20);
     fill(10)      
     rect(x,y1,largura,altura,50)
      if (mouseIsPressed) {
        tela = 2;
      } 
   }
    fill(300,150,0);
    noStroke(10); 
    text("Jogar",340, 165);
    
    // Informações do jogo
     if(mouseX > x && mouseX < x + largura && mouseY > y2 & mouseY < y2 + altura){
      stroke(20);
      fill(10);
      rect(x, y2, largura, altura,30)
       if (mouseIsPressed) {
         tela=3;
       }
    }
    fill(300,150,0);
    noStroke(10);
    text("Informações", 343, 235);
    
    // Creditos
    if(mouseX > x && mouseX < x + largura && mouseY > y3 & mouseY < y3 + altura){
    stroke(20);
    fill(10);
    rect(x,y3,largura,altura,30);
      if (mouseIsPressed) {
         tela=4;
       }
    } 
     fill(300,150,0);
    noStroke(10);
    text("Créditos",340, 300);
    }
  
  //escolher jogador ok
  else if(tela == 2){
    background(0);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    //paisagem
     image(img3,0,0,700,400);
     image(img4,0,440,700,30);
     image(img5,0,380,700,60);
     image(img6,0,310,700,70);    
     //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
     //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    //personagens 
       image(img1,80,280,70,150);
       image(img2,525,280,70,150);
    //////////////
    if(mouseX > x && mouseX < x + largura && mouseY > y2 && mouseY < y2 + altura){
    textSize(26);
    stroke(0);
    fill(0);
    rect(x,y2,largura,altura,60);
      if(mouseIsPressed){
        tela = 5;
      }
    }
    fill(300,150,0);
    noStroke(10); 
    text("Pedro",340, 235);
    if(mouseX > x && mouseX < x + largura && mouseY > y3 && mouseY < y3 + altura){
    textSize(26);
    stroke(0);
    fill(0);
    rect(x,y3,largura,altura,60);
      if(mouseIsPressed){
        tela = 6;
      }
    }
    fill(300,150,0);
    noStroke(10); 
    text("Laura",340, 300);
    
  }
  
  //jogo em açao nivel 1, menino ok
  else if (tela == 5){
     background(0);
     //imagens
     image(img3,0,0,700,400);
     image(img4,0,440,700,30);
     image(img5,0,380,700,60);
     image(img6,0,310,700,70);
    //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
     //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    // lago.
      stroke(100,50,0);
      fill(100,50,0);
      ellipse(330,345,170,55);
      stroke(150,75,0);
      fill(0,180,200);
      ellipse(330,345,150,50);
    //objetos
    image(img8,320,390,15,20);
    image(img9,445,380,70,15);
    image(img10,160,380,60,15);
    //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 1",60,30);
    text("QUAL MATERIAL",320,170);
    text(" FLUTUA NA ÁGUA?",320,200);
    stroke(0);
    if(x1 > 130 && x1 < 130 + larg){
    fill(0);
    rect(130,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 2;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Madeira",180,370);
    stroke(0);
    if(x1 > 280 && x1 < 280 + larg){
    fill(0);
    rect(280,365,larg,alt,60);
       if (keyIsDown(ENTER)) {
         tela = 7;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Plástico",330,383);
    stroke(0);
    if(x1 > 420 && x1 < 420 + larg){
    fill(0);
    rect(420,353,larg,alt,60);
       if (keyIsDown(ENTER)){
        tela = 2;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Ferro",470,370);
    
    //personagem
    if(mode==0){
      image(idle[cont%11],x1,y,70,100);
    } else{
      if(mode==1)
      image(run[cont%11],x1,y,70,100); 
    }
    if(tempo==5){
      cont++;
      tempo=0;
    }else{
      tempo++;
    }
     if (keyIsPressed === true) {
       mode=1;
     }else{
       mode=0;
     }
    if (keyIsDown(LEFT_ARROW) && x1>=-5)
    x1-=3;

   if (keyIsDown(RIGHT_ARROW) && x1<=550)
    x1+=3;
     
  }
  
  //jogo em ação nivel 1, menina ok
  else if (tela == 6){
    background(0)
    //paisagem
     image(img3,0,0,700,400);
     image(img4,0,440,700,30);
     image(img5,0,380,700,60);
     image(img6,0,310,700,70);   
    //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
    //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    // lago.
      stroke(100,50,0);
      fill(100,50,0);
      ellipse(330,345,170,55);
      stroke(150,75,0);
      fill(0,180,200);
      ellipse(330,345,150,50);
    //objetos
    image(img8,320,390,15,20);
    image(img9,445,380,70,15);
    image(img10,170,380,60,15);
  //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 1",60,30);
    text("QUAL MATERIAL",320,170);
    text(" FLUTUA NA ÁGUA?",320,200);
    stroke(0);
    if(x1 > 130 && x1 < 130 + larg){
    fill(0);
    rect(130,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 2;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Madeira",180,370);
    stroke(0);
    if(x1 > 280 && x1 < 280 + larg){
    fill(0);
    rect(280,369,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 7;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Plástico",330,385);
    stroke(0);
    if(x1 > 420 && x1 < 420 + larg){
    fill(0);
    rect(420,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 2;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Ferro",470,370);
   
    //personagem
    if(mode==0){
      image(idle2[cont%11],x1,y,70,100);
    } else{
      if(mode==1)
      image(walk[cont%11],x1,y,70,100); 
    }
    if(tempo==5){
      cont++;
      tempo=0;
    }else{
      tempo++;
    }
     if (keyIsPressed === true) {
       mode=1;
     }else{
       mode=0;
     }
    if (keyIsDown(LEFT_ARROW))
    x1-=3;
    
    if (keyIsDown(RIGHT_ARROW) && x1<=550)
    x1+=3;
  }
  
   //Jogo em ação nivel 2, menino ok
  else if ( tela == 7){
    background(0);
    //imagens
     image(img3,0,0,700,400);
     image(img4,0,440,700,30);
     image(img5,0,380,700,60);
     image(img6,0,310,700,70);
    //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
     //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    // lago.
      stroke(100,50,0);
      fill(100,50,0);
      ellipse(330,345,170,55);
      stroke(150,75,0);
      fill(0,180,200);
      ellipse(330,345,150,50);
    //objetos
    image(img8,320,330,15,20);
    //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 2",60,30);
    textSize(20);
    text("POR QUAL MOTIVO O",320,170);
    text("PLÁSTICO FLUTUA NA ÁGUA?",320,200);
    stroke(0);
    if(mouseX > 80 && mouseX < 80 + lar && mouseY > 375 && mouseY < 375 + H){
    fill(0);
    rect(97,375,lar,H,60);
       if (mouseIsPressed) {
        tela = 2;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("A) Devido a densidade \n do plástico ser maior \n que a da água",180,390);
    stroke(0);
    if(mouseX > 275 && mouseX < 275 + lar && mouseY > 375 && mouseY < 375 + H){
    fill(0);
    rect(275,396,lar,H,60);
       if (mouseIsPressed) {
        tela = 2;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("B) Devido a densidade \n do plástico ser \n igual a da água",355,410);
    stroke(0);
    if(mouseX > 420 && mouseX < 420 + lar && mouseY > 375 && mouseY < 375 + H){
    fill(0);
    rect(470,375,lar,H,60);
       if (mouseIsPressed) {
        tela = 9;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("C) Devido a densidade \n do plástico ser \n menor que da água",545,390); 
 
  }
  
  //Jogo em ação nivel 2, menina ok
  else if (tela == 8){
    background(0)
     //imagens
     image(img3,0,0,700,400);
     image(img4,0,440,700,30);
     image(img5,0,380,700,60);
     image(img6,0,310,700,70);
    //Arvores
       image(img7,10,100,300,280);
       image(img7,380,100,300,280);
       image(img7,0,160,180,190);
       image(img7,500,150,210,200);
       image(img7,140,160,180,190);
       image(img7,340,150,210,200);
     //Sol
    stroke(250,200,0);
    fill(250,200,0);
    circle(600, 60, 80);
    // lago.
      stroke(100,50,0);
      fill(100,50,0);
      ellipse(330,345,170,55);
      stroke(150,75,0);
      fill(0,180,200);
      ellipse(330,345,150,50);
    //objetos
    image(img8,320,330,15,20);

    //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 2",60,30);
    textSize(20);
    text("POR QUAL MOTIVO O",320,170);
    text("PLÁSTICO FLUTUA NA ÁGUA?",320,200);
     stroke(0);
    if(x1 > 80 && x1 < 80 + lar){
    fill(0);
    rect(97,375,lar,H,60);
       if (keyIsDown(ENTEN)) {
        tela = 2;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("A) Devido a densidade \n do plástico ser maior \n que a da água",180,390);
    stroke(0);
    if(x1 > 275 && x1 < 275 + lar){
    fill(0);
    rect(275,375,lar,H,60);
       if (keyIsDown(ENTER)){
        tela = 2;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("B) Devido a densidade \n do plástico ser \n igual a da água",355,390);
    stroke(0);
    if(x1 > 420 && x1 < 420 + lar){
    fill(0);
    rect(470,375,lar,H,60);
       if (keyIsDown(ENTER)) {
        tela = 10;
      } 
    }
    textSize(12);
    fill(300,130,0);
    noStroke(10);
    text("C) Devido a densidade \n do plástico ser \n menor que da água",545,390); 

}
  
  //Jogo em ação nivel 3,menino ok
  else if (tela == 9){
    background(5)
     //imagens
     image(img11,0,0,700,340);
     image(img12,100,260,50,80);
     image(img12,300,260,50,80);
     image(img12,500,260,50,80);
    //objetos
    image(img8,460,375,15,20);
    image(img9,293,387,70,15);
    image(img10,150,375,60,15);
    //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 3",60,30);
    textSize(17);
    text("QUAL MATERIAL PODE SER \n USADO PARA LIGAR DOIS \n FIOS CORTADOS E AS \n LÂMPADAS ASCENDEREM ?",135,100);
    stroke(255);
    if(x1 > 130 && x1 < 130 + larg){
    fill(255);
    rect(130,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 12;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Madeira",180,370);
    stroke(0);
    if(x1 > 280 && x1 < 280 + larg){
    fill(255);
    rect(280,365,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 11;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Metal",330,383);
    stroke(255);
    if(x1 > 420 && x1 < 420 + larg){
    fill(255);
    rect(420,353,larg,alt,60);
       if (keyIsDown(ENTER)){
        tela = 12;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Plástico",470,370);
     //personagem
    if(mode==0){
      image(idle[cont%11],x1,y,70,100);
    } else{
      if(mode==1)
      image(run[cont%11],x1,y,70,100); 
    }
    if(tempo==5){
      cont++;
      tempo=0;
    }else{
      tempo++;
    }
     if (keyIsPressed === true) {
       mode=1;
     }else{
       mode=0;
     }
    if (keyIsDown(LEFT_ARROW) && x1>=-5)
    x1-=3;

   if (keyIsDown(RIGHT_ARROW) && x1<=550)
    x1+=3;
    
  }
  
  //Jogo em ação nivel 3,menina
  else if ( tela == 10){
    background(0)
      //imagens
     image(img11,0,0,700,340);
     image(img12,100,260,50,80);
     image(img12,300,260,50,80);
     image(img12,500,260,50,80);
    //objetos
    image(img8,460,375,15,20);
    image(img9,293,387,70,15);
    image(img10,150,375,60,15);
    //nomes
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    fill(300,150,0);
    noStroke(10); 
    text("Nível 3",60,30);
    textSize(17);
    text("QUAL MATERIAL PODE SER \n USADO PARA LIGAR DOIS \n FIOS CORTADOS E AS \n LÂMPADAS ASCENDEREM ?",135,100);
   stroke(255);
    if(x1 > 130 && x1 < 130 + larg){
    fill(255);
    rect(130,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 12;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Madeira",180,370);
    stroke(255);
    if(x1 > 280 && x1 < 280 + larg){
    fill(255);
    rect(280,369,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 11;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Metal",330,385);
    stroke(255);
    if(x1 > 420 && x1 < 420 + larg){
    fill(255);
    rect(420,353,larg,alt,60);
       if (keyIsDown(ENTER)) {
        tela = 12;
      } 
    }
    textSize(20);
    fill(300,130,0);
    noStroke(10);
    text("Plástico",470,370);
    
    //personagem
    if(mode==0){
      image(idle2[cont%11],x1,y,70,100);
    } else{
      if(mode==1)
      image(walk[cont%11],x1,y,70,100); 
    }
    if(tempo==5){
      cont++;
      tempo=0;
    }else{
      tempo++;
    }
     if (keyIsPressed === true) {
       mode=1;
     }else{
       mode=0;
     }
    if (keyIsDown(LEFT_ARROW))
    x1-=3;
    
    if (keyIsDown(RIGHT_ARROW) && x1<=550)
    x1+=3;
  }
  
  //FIM VENCEU
  else if ( tela == 11){
    
     background(0,200,250);
    image(img13,0,0,700,470);
     textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(40)
    stroke(300);
    fill(250,150,0);
    text(" VOCÊ VENCEU! ",350,370);
    
     if(mouseX > 10 && mouseX < 10 + 60 && mouseY > 430 && mouseY < 430 + 30){
    fill(255);
    rect(15,430,60,30,30);
       if (mouseIsPressed) {
        tela = 1;
      } 
     }
      textSize(15);
    fill(0);
    text("Menu",45,450)
  }
  
  //FIM PERDEU
  else if (tela == 12){
    background(10)
     textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(40)
    stroke(300);
    fill(250,150,0);
    text(" VOCÊ PERDEU! ",350,250);
    
      if(mouseX > 10 && mouseX < 10 + 60 && mouseY > 430 && mouseY < 430 + 30){
    fill(255);
    rect(15,430,60,30,30);
       if (mouseIsPressed) {
        tela = 1;
      } 
     }
      textSize(15);
    fill(0);
    text("Menu",45,450)
    
    
  }
  
  //Informações
  else if ( tela == 3){
      background(0,200,300);
      fill(30);
      textSize(15);
      textAlign(LEFT);
      text("  Descrição: A Trilha do Conhecimento é um jogo de carácter educacional que objetiva abordar conceitos relevantes as Ciências da Natureza, relacionando com o cotidiano dos alunos do 5° ano do Ensino Fundamental. No jogo, o Avatar (personagem) percorre uma trilha com alguns objetos que envolvem conceitos relacionado a propriedade dos materiais, estado físico da matéria, terra e o sistema solar. Ao solucionar de forma correta a problemática envolvendo em cada etapa da trilha as situações vão sendo eliminadas e tornando-se em novos níveis para que o jogador consiga chegar ao fim do jogo, tornando-se campeão da trilha.",25,30,590,300);
     text("  Habilidade: (EF05CI01) Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras.",25,220,590,300);
    text("  Instruções: No primeiro e terceiro nível, aproxime o personagem dos objetos e em seguida clique em enter para escolher o objeto. No segundo, apenas clique com o mouse em cima da alternativa, para dar sua resposta.",25,320,590,300);
    if(mouseX > 10 && mouseX < 10 + 60 && mouseY > 430 && mouseY < 430 + 30){
    fill(255);
    rect(15,430,60,30,30);
       if (mouseIsPressed) {
        tela = 1;
      } 
    }
    textSize(15);
    fill(0);
    text("Voltar",25,450)
   }
  
  //Creditos 
  else if ( tela == 4) {
    background(0,200,300);
    //Fotos
      image(imgw,220,50,130,140);
      image(imga,220,260,130,140);
    //Nomes
      fill(30);
      textSize(15);
      textAlign(CENTER);
      text("Willian Márvine: Programador",280,230);
      text("Alef Santos: Educador",280,430);
    if(mouseX > 10 && mouseX < 10 + 60 && mouseY > 430 && mouseY < 430 + 30){
    fill(255);
    rect(15,430,60,30,30);
       if (mouseIsPressed) {
        tela = 1;
      } 
    }
    textSize(15);
    fill(0);
    text("Voltar",40,450)
    }
  
  
  }
