//geneticAlgo-RocketSim
let target = null;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const logDiv = document.getElementById('log');
const rocketPos = document.getElementById('rocketPos');
const targetPos = document.getElementById('targetPos');

canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      resetRocket();
      updatePositions();
      statusMessage = "En curso...";
      drawScene();
      step();
    });
class Rocket{
      constructor(){
            
      }
      move (){
            
      }
      
      
};

class stars {};
class trees {}; 
class clouds {}; 

const stars
      

