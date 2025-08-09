//geneticAlgo-RocketSim
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
class target{
      
};

class stars {};
class trees {}; 
class clouds {}; 

const stars
      

