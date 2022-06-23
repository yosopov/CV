import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function AddRoom(props) {

    const [Room,setRoom] = useState('Bedroom')
    const [nameRoom,setNameRoom] = useState('')
    const [colorRoom,setColorRoom] = useState('white')

    const send=()=>{      
        if(nameRoom===''){
           return alert ('ERROR')

        }
            props.check(Room,nameRoom,colorRoom)
    }

    const selectRoom=(value)=>{    
        setRoom(value)
    }
    


 
    return (
        <div className='btn-group-toggle'>
                <div>
                    <div  className="input-group mb-1">
                    <select onChange={(e)=>{selectRoom(e.target.value)}} className="custom-select" id="inputGroupSelect01">
                        <option value="Bedroom">Bedroom</option>
                        <option value="Bethroom">Bethroom</option>
                        <option value="Kitchen">Kitchen</option>
                    </select>
                </div>
                <p/>
                    <input onChange={(n)=>{setNameRoom(n.target.value)}} type='text' placeholder='name' maxLength='5'/>
                <p/>
                    <input onChange={(c)=>{setColorRoom(c.target.value)}} type='text' placeholder='color'/>
                <p/>
                <Link to='/'> <button  onClick={send} className='btn btn-secondary active' >create</button></Link>
            </div>     
            
        </div>
    )
}
