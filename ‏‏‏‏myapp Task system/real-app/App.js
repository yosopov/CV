import React from 'react';
import Title from './components/Title.js';
import Body from './components/Body.js';
import Right from './components/Right.js';
import man from './components/man.png';
import women from './components/women.png';
import alien from './components/alien.png';
import './App.css';

const list = [{user:'Hey what\'s up?',src:man},
              {user:'Excellent :) . and you?',src:women},
              {user:'I feel good.',src:man},
              {user:'Not to editor a long time ;)' ,src:alien}]

const pressbutton = [{but:'button1'},
                    {but:'button2'},
                    {but:'button3'}]
function App() { 
  return (
    
    <div className='App'>
      <Title/>
        <div className='main'>
          {list.map((elemant)=>{
            return <Body user={elemant.user} src={elemant.src}/>
            })}
        </div>
      <Right but={pressbutton}/>
   </div>  
    
  )
}

export default App;
