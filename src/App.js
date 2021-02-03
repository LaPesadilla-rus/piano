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
  
  
  const PlayPiano=(event)=>{
   if (event.key==='a'){sound_one.play()}
   if (event.key==='s'){sound_two.play()}
   if (event.key==='d'){sound_three.play()}
   if (event.key==='f'){sound_four.play()}
   if (event.key==='g'){sound_five.play()}
   if (event.key==='h'){sound_six.play()}
   if (event.key==='j'){sound_seven.play()}
    }
  


  return (
    <div className="App" onKeyPress={PlayPiano}>
      <header className="App-header"> 
        <div>
          <button className='go'>GO</button>
        </div>
        <div className='back' >
          <button ></button>
          <button ></button>
          <button ></button>
          <button ></button>
          <button ></button>
          <button ></button>
          <button ></button>
      </div>
      </header>
     
    </div>
  );
}

export default App;
