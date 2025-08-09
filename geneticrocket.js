//geneticAlgo-RocketSim
let target = null;
let statusMessage = "Inicie el Simulador";
const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');
const logDiv = document.getElementById('log');
const rocketPos = document.getElementById('rocketPos');
const targetPos = document.getElementById('targetPos');


    // Dibuja todo en el canvas: mensaje, trayectoria, objetivo y cohete
    function drawScene() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'linear-gradient(to top, #8ecae6, #000000)';
      ctx.font = '18px Arial';
      ctx.fillText(statusMessage, 20, 30);

/*

      canvas {
        display: block;
        margin: auto;
        background: linear-gradient(to top, #8ecae6, #000000);
        border: 2px solid #000;
      }
    
*/

          
      if (rocket.trail.length > 1) {
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.moveTo(rocket.trail[0].x, rocket.trail[0].y);
        for (let p of rocket.trail) ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      if (target) {
        ctx.fillStyle = rocket.success ? 'red' : 'green';
        const radius = rocket.success ? 64 : 32;
        ctx.beginPath();
        ctx.arc(target.x, target.y, radius, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.save();
      ctx.translate(rocket.x, rocket.y);
      if (rocket.exploded || rocket.success) {
        ctx.fillStyle = 'red';
        const radius = rocket.success ? 16 : 8;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.rotate((rocket.angle * Math.PI) / 180);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-10, -5);
        ctx.lineTo(-10, 5);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      //resetRocket();
      //updatePositions();
      statusMessage = "En curso...";
      drawScene();
      //step();
    });
class Rocket{
      constructor(){
            
      }
      move (){
            
      }
      
      
};

class star {};
class tree {}; 
class cloud {}; 


      

