const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2D');

const ball = { 

    x: canvas.width / 2, 

    y: canvas.height / 2, 

    radius: 10, 

    dx: 2, 

    dy: -2 

}; 



const paddle = { 

    width: 75, 

    height: 10, 

    x: (canvas.width - 75) / 2, 

    y: canvas.height - 10 

}; 



let rightPressed = false; 

let leftPressed = false; 
function drawBall() { 

    ctx.beginPath(); 

    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); 

    ctx.fillStyle = "#0095DD";}
    function drawBall() { 

        ctx.beginPath(); 
 
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); 
 
        ctx.fillStyle = "#0095DD"; 
 
        ctx.fill(); 
 
        ctx.closePath(); 
 
    };
 
   
 
    function drawPaddle() { 
 
        ctx.beginPath(); 
 
        ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height); 
 
        ctx.fillStyle = "#0095DD"; 
 
        ctx.fill(); 
 
        ctx.closePath(); 
 
    };
 
   
    function draw() { 

        ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
        drawBall(); 
 
   
 
        if (rightPressed && paddle.x < canvas.width - paddle.width) { 
 
            paddle.x += 7; 
 
        } else if (leftPressed && paddle.x > 0) { 
 
            paddle.x -= 7; 
 
        } 
 
   
 
        drawPaddle(); 
 
        // Update ball position here 
 
        requestAnimationFrame(draw); 
 
    };
 
   
 
   
 
    
    document.addEventListener("keydown", (e) => { 

        if (e.key === "Right" || e.key === "ArrowRight") { 
 
            rightPressed = true; 
 
        } else if (e.key === "Left" || e.key === "ArrowLeft") { 
 
            leftPressed = true; 
 
        } 
 
    }); 
 
   
 
    document.addEventListener("keyup", (e) => { 
 
        if (e.key === "Right" || e.key === "ArrowRight") { 
 
            rightPressed = false; 
 
        } else if (e.key === "Left" || e.key === "ArrowLeft") { 
 
            leftPressed = false; 
 
        } 
 
    });  
    function draw() { 

        ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
   
 
        ball.x += ball.dx; 
 
        ball.y += ball.dy; 
 
   
 
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) { 
 
            ball.dx = -ball.dx; 
 
        } 
 
   
 
        if (ball.y - ball.radius < 0) { 
 
            ball.dy = -ball.dy; 
 
        } else if (ball.y + ball.radius > canvas.height) { 
 
            // Reset ball position if it hits the bottom 
 
            ball.x = canvas.width / 2; 
 
            ball.y = canvas.height / 2; 
 
            ball.dx = 2; 
 
            ball.dy = -2; 
 
        } 
 
   
 
        drawBall(); 
 
   
 
        if (rightPressed && paddle.x < canvas.width - paddle.width) { 
 
            paddle.x += 7; 
 
        } else if (leftPressed && paddle.x > 0) { 
 
            paddle.x -= 7; 
 
        } 
 
   
 
        drawPaddle(); 
 
        requestAnimationFrame(draw); 
 
    };
 
   
 
   
    function draw() { 

        ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
   
 
        ball.x += ball.dx; 
 
        ball.y += ball.dy; 
 
   
 
        // Ball collision with walls 
 
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) { 
 
            ball.dx = -ball.dx; 
 
        } 
 
   
 
        // Ball collision with paddle 
 
        if ( 
 
            ball.y + ball.dy > canvas.height - ball.radius - paddle.height &&
 
            ball.x > paddle.x &&
 
            ball.x < paddle.x + paddle.width
 
        ) 
        { 
 
            ball.dy = -ball.dy; 
 
        } 
 
   
 
        // Ball collision with top 
 
        if (ball.y - ball.radius < 0) { 
 
            ball.dy = -ball.dy; 
 
        } else if (ball.y + ball.radius > canvas.height) { 
 
            ball.x = canvas.width / 2; 
 
            ball.y = canvas.height / 2; 
 
            ball.dx = 2; 
 
            ball.dy = -2; 
 
        } 
 
   
 
        drawBall(); 
 
   
 
        if (rightPressed && paddle.x < canvas.width - paddle.width) { 
 
            paddle.x += 7; 
 
        } else if (leftPressed && paddle.x > 0) { 
 
            paddle.x -= 7; 
 
        } 
 
   
 
        drawPaddle(); 
 
        requestAnimationFrame(draw); 
 
    };


