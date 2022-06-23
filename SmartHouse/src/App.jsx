import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Title from './components/Title.js';
import randomId  from 'random-id';
import AddRoom from './components/AddRoom.js';
import ProtectedRoute from './components/common/protectedRoute.jsx';
import MyRoom from './components/MyRoom.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  
  const [openRoom,setopenRoom]=useState({});
  const [loca,setLoca]=useState();
  const [arr,setArr] =useState([]);

  const saveRoom=(id,data)=>{
    const rooms = arr.map((e)=>{
      if (id === e.id) {
        let room = e;
        room.products = data
        return room;
      }
      return e;
    })
    setArr(rooms);
  }
  
  const changeLocalost=(id)=>{
    const room =  arr.filter((e)=>{
      return e.id===id
    })
    setopenRoom(room)
    setLoca(id);  
  }

  const check=(appTypeRoom,appNameRoom,AppColorRoom)=>{
      setArr([...arr,{id:randomId(30,'room'),appTypeRoom:appTypeRoom,appNameRoom:appNameRoom,AppColorRoom:AppColorRoom,products:[]}]); 
  }

  return (
    <div className='App'>
      <Title/>
      <Router>
        <Switch>   
          <Route exact path='/' component={()=>{return <div><p>{arr.map((element)=>{ 
            return(
            <Link key={element.id} to={`/room/${element.id}`}>
              <button className='btn' onClick={()=>{changeLocalost(element.id)}} style={{backgroundColor:element.AppColorRoom ,margin:'20px'}}>{element.appNameRoom}</button>
            </Link>)
             })}</p>
          <Link to='/addroom'><button className='btn btn-secondary active'>+</button></Link></div>}}>
          </Route>
          <Route exact path='/addroom' component={()=>{return (<AddRoom check={check}/>) }}></Route> 
          <ProtectedRoute exact path={'/room/:id'}
          component={<MyRoom room={openRoom} saveArrRome={saveRoom}/>}
          idLocation={`/room/${loca}`}></ProtectedRoute>
          <ProtectedRoute exact path={`/*`}></ProtectedRoute>    
        </Switch>  
      </Router>  
      
    </div>
  )

}