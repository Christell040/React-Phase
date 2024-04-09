import { useEffect, useState,useRef } from 'react';
import './App.css';

// function App() {

//   const [count, setcount] = useState(0)

//   const handleplus = ()=>{
//     setcount(count+1)
//   }
//   const handleminus = () =>{
//     setcount(count-1)
//   }
//   const handlereset = () =>{
//     setcount(0)
//   }

//   useEffect()

//   return (

//     <div className="App">
//       <div className='header'> Counter App</div>
//       <div className='counts'>{count}</div>
//       <div className='buttons'>
//       <button className='btn' onClick={handleplus} >Plus</button>
//       <button className='btn' onClick={handleminus}>Minus</button>
//       <button className='btn' onClick={handlereset}>Reset</button>
      
//       </div>


//     </div>
//   );
// }


function CounterApp() {
  // useState Hook to manage the counter value
  const [counter, setCounter] = useState(0);

  // useEffect Hook to update the document title with the counter value
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]); // Dependency array ensures effect runs only when counter changes

  // useRef Hook to access the DOM button element
  const buttonRef = useRef(null);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  return (
    <div>

      <div className="App">
       <div className='header'> Counter App</div>
       <div className='counts'>{counter}</div>
        <div className='buttons'>
      <button className='btn' onClick={incrementCounter} >Plus</button>
       <button className='btn' onClick={decrementCounter}>Minus</button>
       <button  className='btn'  ref={buttonRef} onClick={Reset}>
          Reset
        </button>
      
       </div>
    </div>
    </div>
  );
}

export default CounterApp;
