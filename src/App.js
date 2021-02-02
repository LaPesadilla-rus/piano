import sound from './1.mp3'
import './App.css';

function App() {
  
  const sound_one = new Audio(sound)
  const sOne =()=>{
    
    sound_one.play();
    
  }
  const SOneSt=()=>{
    sound_one.pause();
  }
  

  return (
    <div className="App">
      <header className="App-header"> 
      <div className='back'>
     <button onClick={sOne} onDoubleClick={SOneSt}></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button ></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
     <button className='bl'></button>
     <button></button>
      </div>
      </header>
     
    </div>
  );
}

export default App;
