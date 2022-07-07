import React from 'react'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NaveBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,horror} from './urls'

function App() {
  return (
    <div className='App'>
      
      <NavBar/>
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={horror} title='action' isSmall/> 
    </div>
  
  );
}

export default App;
