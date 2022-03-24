import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}


const Rating = () => {
  return(
      <div>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </div>
  )
}

const Star = () => {
  return(
      <div>star</div>
  )
}


const Accordion = () => {
  return(
      <div>
          <h3>Menu</h3>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>
      </div>
  )
}


export default App;