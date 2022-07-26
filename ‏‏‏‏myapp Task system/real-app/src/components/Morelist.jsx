import React, { Component } from 'react'
import './css/morelist.css'
import uniqid from 'uniqid'
import { MdAddCircleOutline } from "react-icons/md";

export default class Morelist extends Component {
    constructor(props){
        super(props);
        this.state={
            fromTime:"",
            toTime:"",
            task:"",
            flagAddTask:false
        };
        
    }
    createTask=(val)=>{
        this.setState({task:val.target.value});
    }
    addTask=()=>{
        const body = this.state;
        if (body.fromTime==="" ||body.toTime==="" ||body.task==="") {
            return alert("You must complete all the fields.");
        }
        this.props.addTask({id_task:uniqid(),task:body.task,fromTime:body.fromTime ,toTime:body.toTime});
        this.setState({flagAddTask:false,task:"",fromTime:"",toTime:""});
    }
    changeTime=(e)=>{
        if (e.target.name === "fromTime") {
          return  this.setState({fromTime:e.target.value});
        }
        this.setState({toTime:e.target.value});
    }

    render() {
        const systemLanguage= this.props.systemLanguage;
        const {task}= this.state;
        const {flagAddTask}= this.state;
        return (
            <>
            {!flagAddTask?(
            <div className='position-fixed end-0 top-50 rounded-start'>
                <button 
                onClick={()=>{this.setState({flagAddTask:true})}}
                className='btn btn-primary addTask'>
                    <h3 className='p-2'><MdAddCircleOutline/>
                    {systemLanguage==="rtl"?(" אוסף משימה"):(" add task")}
                    </h3>
                </button>
            </div>

            ):(
            <div id='moreListDiv'>
                <textarea className='moreListImput mt-2' onChange={this.createTask} type='text' value={task}/>
                <br/>
                <span>
                {systemLanguage==="rtl"?("הגדר זמן לביצוע המשימה."):("Set a time to complete the task.")}</span>
                <br />
                <input onChange={(e)=>{this.changeTime(e)}} type="time" id="fromTime" name="fromTime" required/>
                <strong className='ms-2 me-2'>-</strong>
                <input onChange={(e)=>{this.changeTime(e)}} type="time" id="toTime" name="toTime" required/>
                <br/>
                <button type="button" className='moreListButton btn btn-primary btn-lg btn-block' onClick={this.addTask}>
                    {systemLanguage==="rtl"?("צור"):("Create")}
                </button>
            </div>
            )}
            
            </>
         )
           
    }
}
