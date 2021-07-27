import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [advice, setAdvice]= useState('')

  useEffect(() => {
fetchAdvice()

  }, []);
    const fetchAdvice = () => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
          const {advice} = res.data.slip;
          console.log(advice);
          setAdvice(advice);
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
    };
 
  return (
    <div className="App">
      <div className = 'card'>
      <h1 className = 'heading'>{advice}</h1>
      <button onClick = {fetchAdvice} className = 'button'> 
      <span>
        More Advice
        </span>
        </button>
      </div>
    </div>
  );
}

export default App;
