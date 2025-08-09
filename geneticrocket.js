//geneticAlgo-RocketSim
let target = null;
let statusMessage = "Inicie el Simulador";
const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');


    // Dibuja todo en el canvas: mensaje, trayectoria, objetivo y cohete
function drawScene() {
    //dibujar nubes 
    //dibujar arboles 
    //dibujar 
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
class cloud {
  constructor(x, y, tamaño, color) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    // Dibujamos varios círculos solapados para formar la nube
    ctx.arc(this.x, this.y, this.tamaño, 0, Math.PI * 2);
    ctx.arc(this.x + this.tamaño * 0.8, this.y - this.tamaño * 0.4, this.tamaño * 0.9, 0, Math.PI * 2);
    ctx.arc(this.x + this.tamaño * 1.6, this.y, this.tamaño, 0, Math.PI * 2);
    ctx.arc(this.x + this.tamaño * 0.8, this.y + this.tamaño * 0.4, this.tamaño * 0.9, 0, Math.PI * 2);

    ctx.closePath();
    ctx.fill();
  }
}
 let cloud1 = cloud.new(20,20,60,101010);
    cloud1.draw(); 
}; 


      

