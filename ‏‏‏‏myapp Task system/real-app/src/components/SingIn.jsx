import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import './css/login.css'





function SingIn(props)  {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const checkName=(val)=>{
        setName(val.target.value);
    }
    const checkPassword=(val)=>{
        setPassword(val.target.value);
    }
    const handleSubmit=(event)=>{
        const user =  props.users.filter((elemant)=>{
            return  name=== elemant.name && password === elemant.password;
        })
        if (user.length<=0) {
           return alert("sorry");
        }
        event.preventDefault();
        props.login(user);
        navigate("/");
    }

                

        return (
            <div className='login p-5 container'>
                    <div className='border border-dark p-5 containerLogin'>
                        <h3 className='d-block mb-2'>{props.systemLanguage==="rtl"?("התחבר"):("Login")} </h3>
                        <hr />
                        <form  onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text p-3" id="basic-addon1"><BiUserCircle/></span>
                            </div>
                                <input type="text"
                                value={name}
                                className="form-control"
                                onChange={checkName}
                                placeholder={props.systemLanguage==="rtl"?("שם משתמש"):("name")}
                                aria-label="Username"
                                aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text p-3" id="basic-addon1"><RiLockPasswordFill/></span>
                            </div>
                                <input type="password"
                                value={password}
                                className="form-control"
                                onChange={checkPassword}
                                placeholder={props.systemLanguage==="rtl"?("סיסמה"):("password")}
                                aria-label="Username"
                                aria-describedby="basic-addon1"/>
                            </div>
                            <br/>
                            <button className=' btn btn-primary'>{props.systemLanguage==="rtl"?("התחבר"):("Login")}</button>
                        </form>
                </div>
            </div>
        )
}

export default SingIn
