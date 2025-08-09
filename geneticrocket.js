//RocketAlgoScript;
class Rocket {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 90;
        this.speed = 5;
        this.rounds = 0;
        this.maxRounds = 10;
        this.exploded = false;
        this.success = false;
        this.dx = 0;
        this.dy = 0;
        this.trail = [{ x: this.x, y: this.y }];
      }
      updateDirection() {
        const rad = (this.angle * Math.PI) / 180;
        this.dx = Math.cos(rad);
        this.dy = Math.sin(rad);
      }
      move(step) {
        this.x += step * this.dx;
        this.y += step * this.dy;
        this.trail.push({ x: this.x, y: this.y });
      }
    };

const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");
const GRAVITY = 0.02;
const NUM_ROCKETS = 10;
const MUTATION_RATE = 0.1;
const TARGET_RADIUS = 10;
const INITIAL_FUEL = 100;
const FRICTION = 0.98;
const MAX_THRUST = 0.2;
const MAX_ROTATION = Math.PI / 18;

let target = { x: canvas.width / 2, y: 100 };
 canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      target = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    });

 function resetRocket() {
      rocket = new Rocket(50, 300);
      logDiv.innerHTML = "";
      updatePositions();
      clearInterval(interval);
    };


function drawScene() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.font = '18px Arial';
      ctx.fillText(statusMessage, 20, 30);
    };

   let rocket;
    let target = null;
    let statusMessage = "Haz clic en el canvas para elegir un objetivo.";
    let interval = null;
    let subStepsRemaining = 0;

    function resetRocket() {
      rocket = new Rocket(50, 300);
      logDiv.innerHTML = "";
      updatePositions();
      clearInterval(interval);
    }

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      resetRocket();
      updatePositions();
      statusMessage = "En curso...";
      drawScene();
      step();
    });

    function updatePositions() {
      rocketPos.textContent = `🚀 Cohete: (x: ${rocket.x.toFixed(1)}, y: ${rocket.y.toFixed(1)})`;
      targetPos.textContent = target ? `🎯 Objetivo: (x: ${target.x.toFixed(1)}, y: ${target.y.toFixed(1)})` : '🎯 Objetivo: (x: –, y: –)';
    }

    function logDecision(round, decision, speed, angle, expectedX, expectedY) {
      const entry = document.createElement('div');
      entry.className = 'log-entry';
      entry.innerHTML = `<strong>Ronda ${round}</strong><br>Decisión: <strong>${decision}</strong><br>Velocidad: ${speed}, Ángulo: ${angle}°<br>Próxima posición esperada: (x: ${expectedX.toFixed(1)}, y: ${expectedY.toFixed(1)})<br>--------------------------`;
      logDiv.appendChild(entry);
      logDiv.scrollTop = logDiv.scrollHeight;
    }


