import Accordian from './components/accordian'
// import RandomColor from './components/random-color';
import './App.css';
import StarRating from './components/start-rating';

function App() {
  return (
    <div className="App">
      {/* accordian component  */}
      {/* <Accordian/> */}

      {/* random color  */}
     {/* <RandomColor/> */}

     {/* start Rating  */}
     <StarRating noOfStar ={10}/>

    </div>
  );
}

export default App;
