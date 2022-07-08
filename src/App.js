import React from 'react'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NaveBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,horror,action} from './urls'

function App() {
  return (
    <div className='App'>
      
      <NavBar/>
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='action' isSmall/> 
      <RowPost url={horror} title='horror' isSmall/> 
      
    </div>
  
  );
}

export default App;
