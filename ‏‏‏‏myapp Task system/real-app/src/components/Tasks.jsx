import React, { Component } from 'react'
import './css/tasks.css'
import {
    AiFillEdit,
    AiOutlineSave,
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { MdOutlineDoneOutline } from "react-icons/md";

export default class Tasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            taskFromProps:this.props.task,
            task:this.props.task,
            toTime:this.props.toTime,
            fromTime:this.props.fromTime,
            flag:false
        }
    }

    editTask=(val)=>{
        this.setState({task:val.target.value});
    }

    changeTime=(e)=>{
        if (e.target.name==="fromTime") {
            return this.setState({fromTime:e.target.value});
        }
        this.setState({toTime:e.target.value});
    }

    endTask=(e)=>{
        let div=document.getElementById(`containerTask${this.props.id}`);
        div.className = 'containerTask';
        setTimeout(()=>{
            this.props.taskCompleted(this.props.id)   ;  
        },2000)
    }

    confrimEdit=()=>{
        if (this.state.task.length<2) {
           return alert("minimum 2 characters");
        }
        this.props.editTask(this.props.id,this.state.task,this.state.fromTime,this.state.toTime);
        this.setState({flag:false ,taskFromProps:this.state.task});
    }
    

    render() {
        const {taskFromProps} = this.state;
        const {flag} = this.state;
        const {task} = this.state;
        const {toTime} = this.state;
        const {fromTime} = this.state;
        return (
            <>
            {flag?(
                <div>                
                    <div id='tasksdiv' className='d-flex flex-column'>
                        <div className='d-flex justify-content-around align-items-center'>
                        <button className='btn btn-primary' onClick={()=>{this.confrimEdit()}}><AiOutlineSave/></button>
                        <textarea
                        style={{direction:this.props.systemLanguage}}
                         className='changeTask' onChange={(e)=>{this.editTask(e)}} type='text' value={task}/>
                        <button className='btn btn-warning' onClick={()=>{this.setState({flag:false,fromTime:this.props.fromTime,toTime:this.props.toTime})}}><GiCancel/></button>
                        </div>
                        <br />
                        <div>
                            <input value={fromTime} onChange={(e)=>{this.changeTime(e)}} type="time" id="fromTime" name="fromTime"/>
                            <strong className='ms-2 me-2'>-</strong>
                            <input value={toTime} onChange={(e)=>{this.changeTime(e)}} type="time" id="toTime" name="toTime"/>
                        </div>
                    </div>
                </div>
            ):
        (
            <div id={`containerTask${this.props.id}`} className="successRemove">
                <label>Task time: {fromTime+ ' - ' +toTime}</label>
                <div id='tasksdiv'>
                    <button className='btn btn-success border-success' onClick={(e)=>{this.endTask(e)}}><MdOutlineDoneOutline/></button>
                    <textarea onChange={()=>{this.setState({taskFromProps:taskFromProps})}} className='taskinput' type='text'  value={taskFromProps}/>
                    <button className='btn btn-primary' onClick={()=>{(this.setState({flag:true}))}}><AiFillEdit/></button>
                </div>
            </div>

        )}
        </>
        )
    }
}


