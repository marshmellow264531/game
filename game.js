const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 2,
    dy: -2
};
const paddle = {
    width: 75,
    height: 50,
    x: (canvas.width - 75) / 2, 
    y: canvas.height - 10
};
let rightPressed = false;
let leftPressed = false;

   function drawBall() { 

       ctx.beginPath(); 

       ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); 

       ctx.fillStyle = "#0095DD"; 

       ctx.fill(); 

       ctx.closePath(); 

   } 

  

   function drawPaddle() { 

       ctx.beginPath(); 

       ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height); 

       ctx.fillStyle = "#0095DD"; 

       ctx.fill(); 

       ctx.closePath(); 

   } 

  

   function draw() { 

       ctx.clearRect(0, 0, canvas.width, canvas.height); 

       drawBall(); 

       drawPaddle(); 

       // Update ball and paddle positions here 

       requestAnimationFrame(draw); 

   } 

  

   draw(); 