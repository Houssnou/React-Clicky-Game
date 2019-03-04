import React from 'react';

const jumbotron=()=>{
return(
  <div className="jumbotron bg-dark text-light my-2 p-1 text-center">
  <h1>React Clicky Game</h1>
  <p className="lead"> A simple memory challenge game made with React</p>
  <hr className="my-2"></hr>
  <p>Rules</p>
  <p> You loss when you click twice on the same image. You score 1 every time you click on the image that was not clicked. Highest score reflects you high score. You win when you are able to click on all 15 images on one game.</p>
  </div>
)
}

export default jumbotron;