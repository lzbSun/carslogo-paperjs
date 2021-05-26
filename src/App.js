import { useEffect, useRef } from 'react';
import paper from 'paper';
import Audi from './logos/Audi'
import BMW from './logos/BMW'
import Benz from './logos/Benz'
import Dazhong from './logos/Dazhong'
import XP from './logos/XP'

import './App.css';

function App() {
  const canvasRef = useRef(null)
  

  useEffect(() => {
    paper.setup(canvasRef.current);
    Audi()
    BMW()
    Benz()
    Dazhong()
    XP()
  },[])

  return ( 
    <canvas id='my-cars' ref={canvasRef} resize="true" />
  );
}

export default App;
