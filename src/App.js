import './App.css';
import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="padding">
        <Header/>
        <div className='flex'>
          <Navigation/>
          <Main>
            <div className='flex'>
              <SubContents/>
              <SubContents/>
              <SubContents/>
            </div>
            <Advertisement/>
          </Main>
        </div>
    </div>
  );
}

export default App;
