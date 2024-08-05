// import Accordian from './components/accordian'
// import RandomColor from './components/random-color';
import './App.css';
import ImageSlider from './components/image-slider';
// import StarRating from './components/start-rating';

function App() {
  return (
    <div className="App">
      {/* accordian component  */}
      {/* <Accordian/> */}

      {/* random color  */}
     {/* <RandomColor/> */}

     {/* start Rating  */}
     {/* <StarRating noOfStar ={10}/> */}

     {/* Image Slider  */}
     <ImageSlider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'}/>

    </div>
  );
}

export default App;
