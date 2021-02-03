import sound from './sound/1.mp3'
import sout from './sound/2.mp3'
import south from './sound/3.mp3'
import sof from './sound/4.mp3'
import souf from './sound/5.mp3'
import sos from './sound/6.mp3'
import sosv from './sound/7.mp3'
import './App.css';

function App() {
  
  const sound_one = new Audio(sound)
  const sound_two = new Audio(sout)
  const sound_three = new Audio(south)
  const sound_four = new Audio(sof)
  const sound_five = new Audio(souf)
  const sound_six = new Audio(sos)
  const sound_seven = new Audio(sosv)
  
  const sOne =()=>{
    sound_one.play();
  }

  const sTwo =()=>{
    sound_two.play();
  }
  const sTr =()=>{
    sound_three.play();
  }

  const sF =()=>{
    sound_four.play();
  }
  const sFv =()=>{
    sound_five.play();
  }

  const sSx =()=>{
    sound_six.play();
  }
  const sSv=()=>{
    sound_seven.play();
  }


  return (
    <div className="App">
      <header className="App-header"> 
      <div className='back'>
     <button onClick={sOne}></button>
     <button onClick={sTwo}></button>
     <button onClick={sTr}></button>
     <button onClick={sF}></button>
     <button onClick={sFv}></button>
     <button onClick={sSx}></button>
     <button onClick={sSv}></button>
      </div>
      </header>
     
    </div>
  );
}

export default App;
