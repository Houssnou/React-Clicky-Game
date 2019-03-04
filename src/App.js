import React from 'react';
import Jumbotron from './components/jumbotron';
import Score from './components/score';

import Footer from './components/footer';

const App = () => {
 
  return (
    <div className="container">
      <Jumbotron />
      <Score /> 
      
      <Footer />
    </div>
  );

}

export default App;
