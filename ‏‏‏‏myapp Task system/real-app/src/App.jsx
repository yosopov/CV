import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import uniqid from 'uniqid'
import Navbar from './components/Navbar.jsx';
import SingIn from './components/SingIn.jsx';
import SingUp from './components/Singup.jsx';
import Welcome from './components/Welcome.jsx';
import ProtectedRoute from './components/common/protectedRoute.jsx' 
import {users} from './data/user.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component { 
  constructor(){
    super()
    this.state={
      users:users,
      userLogin:null,
      systemLanguage:"ltr"
    }
    this.login = this.login.bind(this);
    this.singup = this.singup.bind(this);
    this.logout = this.logout.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }     

    login(user){
      this.setState({userLogin:user});
    }
    singup(user){
      const userExist =  this.state.users.filter(element=>{
        return element.name === user.name;
      })
      if (userExist.length>0) {
        return true;
      }
      for (let index = 0; index <= this.state.users.length; index++) {        
        for (const element of this.state.users) {
          if (element.id===user.id) {
            user.id=uniqid();
            index = 0;
          }
        }
      }
      this.setState({
        users:[...users,user]
      })
      return false;
    }
    logout(){
      this.setState({userLogin:null});
    }
    changeLanguage(language){
      if (language==="Hebrew") {
       return this.setState({systemLanguage:"rtl"});
      }
      this.setState({systemLanguage:"ltr"});
    }
    addTask(task){
      let users = this.state.users.map((element)=>{
        if (this.state.userLogin[0].name === element.name) {
          let user = element;
          user.execution.push(task);
          return user;
        }
        return element;
      })
       this.setState({users:users});
    }
    taskCompleted(idTask){
      const execution =  this.state.userLogin[0].execution.filter((element)=>{
        return element.id_task !== idTask;
      })
      let newUsers = this.state.users;
      for (const key in newUsers) {
        if (newUsers[key].id=== this.state.userLogin[0].id) {
          newUsers[key].execution= execution; 
          break;
        }
      }
          this.setState({users:newUsers}) ;    
    }
    editTask(idTask,text,fromTime,toTime){
    const newUsers = this.state.users.map((element)=>{
      if (element.id=== this.state.userLogin[0].id) {
        let user = element;
        const execution= user.execution.map(element=>{
          if (element.id_task===idTask) {
            return {id_task:idTask,task:text,fromTime:fromTime,toTime:toTime};
          }
          return element;
        })
        user.execution= execution;
        this.setState({userLogin:[user]});
        return user;
      }
      return element;
    })
    this.setState({users:newUsers});
  }

  render(){
    const {systemLanguage} = this.state;
    const {users} = this.state;
    const {userLogin} = this.state;
  return (
    
    <div style={{direction:systemLanguage}} className='App'>
        <Router>   
              <header>
                    <Navbar  userLogin={userLogin} logout={this.logout} systemLanguage={systemLanguage} changeLanguage={this.changeLanguage}/>
              </header>
                <main content="width=device-width, initial-scale=1">
                <Routes>
                    <Route path='/' element={userLogin?(<Welcome systemLanguage={systemLanguage} user={userLogin} addTask={this.addTask} taskCompleted={this.taskCompleted} editTask={this.editTask}/>):
                      <h1 className='pt-5'>
                                {systemLanguage==="rtl"?
                                ("ברוך הבא. כדי להשתמש במערכת אתה חייב קודם לתחבר"):("Welcome. to use the site you must connect to the system")}
                        </h1>}/>
                        <Route path='/singin' element={
                        <ProtectedRoute loginOrSingUp user={userLogin}>
                          <SingIn systemLanguage={systemLanguage}  users={users} login={this.login}/>
                        </ProtectedRoute>}></Route>
                        <Route path='/singup' element={
                        <ProtectedRoute loginOrSingUp user={userLogin}>
                          <SingUp systemLanguage={systemLanguage}  singup={this.singup}/>
                        </ProtectedRoute>}></Route>
                  </Routes>
                </main>
        </Router> 
    </div>
  )
}}


export default App
  
// yitzhak yosopov 