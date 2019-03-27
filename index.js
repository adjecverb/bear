var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// width="700" height="550"
// lunkuo
context.beginPath();
context.arc(350,260,230,Math.PI*0.15, Math.PI*0.85);
context.arc(180,320,50,Math.PI*0.85, Math.PI*1.15);
context.arc(240,250,100,Math.PI*0.9, Math.PI*1.1);
context.arc(150,150,50,Math.PI/2, Math.PI*2);
context.arc(350,300,210,Math.PI*1.3, Math.PI*1.7);
context.arc(550,150,50,-Math.PI, Math.PI/2);
context.arc(460,250,100,-Math.PI*0.1, Math.PI*0.1);
context.arc(520,320,50,-Math.PI*0.15, Math.PI*0.15);
context.closePath();
context.stroke();
// yanjing
context.beginPath();
context.ellipse(250,250,10,9,Math.PI/180*45,Math.PI*0, Math.PI*2);
context.closePath();
context.fill();
context.beginPath();
context.ellipse(450,250,10,9,Math.PI/180*135,Math.PI*0, Math.PI*2);
context.closePath();
context.fill();
//zui
context.beginPath();
context.arc(350,330,100,Math.PI*0.2, Math.PI*0.8);
// context.closePath();
context.lineWidth = 2;
context.stroke();
context.beginPath();
context.arc(310,420,50,Math.PI*1.1, Math.PI*1.3);
context.lineWidth = 3;
context.stroke();
context.beginPath();
context.arc(390,420,50,-Math.PI*0.3, -Math.PI*0.1);
context.stroke();
// bizi
context.beginPath();
context.arc(350,300,30,Math.PI*1.1, Math.PI*1.3);
context.lineTo(365,275);
context.arc(350,300,30,-Math.PI*0.3, -Math.PI*0.1);
context.lineTo(350,315);
context.closePath();
context.fill();
//meimao
context.beginPath();
context.arc(250,240,30,Math.PI*1.1, Math.PI*1.6);
context.stroke();
context.beginPath();
context.arc(450,240,30,-Math.PI*0.6, -Math.PI*0.1);
context.stroke();