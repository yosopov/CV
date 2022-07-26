import React from 'react'
import Tasks from './Tasks.jsx'
import Morelist from './Morelist.jsx';
import './css/welcome.css'


function Welcome (props) {
const systemLanguage = props.systemLanguage;
        return (
            <>
            <div className='container tasks'>
                <h1 className='p-5'>
                    {systemLanguage==="rtl"?(
                        "ברוך הבא "
                    ):(
                    'Welcome '
                    )}
                     {props.user[0].name} </h1>
                <div className='mb-5 pb-5'>
                    {props.user[0].execution.map(list=>{
                    return <Tasks editTask={props.editTask} taskCompleted={props.taskCompleted}  systemLanguage={systemLanguage} key={list.id_task} id={list.id_task} task={list.task} fromTime={list.fromTime} toTime={list.toTime}/>
                })}
                </div>
                
            </div>
                <Morelist  systemLanguage={systemLanguage} addTask={props.addTask}/>
            </>
        )
}

export default Welcome