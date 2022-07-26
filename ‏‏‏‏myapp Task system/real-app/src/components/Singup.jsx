import React,{useState} from 'react';
import uniqid from 'uniqid'
import axios from 'axios';
import validator from 'validator'
import {useNavigate} from 'react-router-dom';
import { BiUserCircle ,BiImage} from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import './css/login.css'


function SingUp(props)  {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [nameImage, setNameImage] = useState('');
    const [flagFile, setFlagFile] = useState(true);
    const navigate= useNavigate();

    const checkName=(val)=>{
        setName(val.target.value);
    }
    const checkPassword=(val)=>{
        setPassword(val.target.value);
    }
    const checkImage=(val)=>{
        if (!flagFile) {
            setImage(val.target.files[0]);
        }
        return setNameImage(val.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if (name=== ''||password=== ''||image === '') {
            return alert("error")
        }
        if (flagFile && !validator.isURL(nameImage)){
            return alert("Image Url must start with http:// or https://")
        }
        if (flagFile && validator.isURL(nameImage)) {
            const user =  {id:uniqid(),name:name,password:password,image:nameImage,execution:[]}
            const error = props.singup(user);
            if (error) {
                return alert("Change userName");
             }
            return navigate("/singin");
        }
        const formData = new FormData();
        formData.append('file', image);

         axios.post('//localhost:8000/apload', formData)
        .then((e)=>{
            const user =  {id:uniqid(),name:name,password:password,image:e.data,execution:[]}
            const error = props.singup(user);
            if (error) {
               return alert("Change userName")
            }
            navigate("/singin");
        })
        .catch((erorr)=>{console.error('Error')})      
    }

                

        return (
            <div className='login p-5 container'>
                    <div className='border border-dark p-5 containerLogin'>
                        <h3 className='d-block mb-2'>{props.systemLanguage==="rtl"?("הרשמה"):("SingUp")} </h3>
                        <hr />
                        <form method='post' onSubmit={handleSubmit}>
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
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text p-3" id="basic-addon1"><RiLockPasswordFill/></span>
                            </div>
                                <input type="password"
                                value={password}
                                className="form-control"
                                onChange={checkPassword}
                                placeholder={props.systemLanguage==="rtl"?("סיסמה"):("password")}
                                aria-label="UserPassword"
                                aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text p-3" id="basic-addon1"><BiImage/></span>
                            </div>
                                <input type="text"
                                value={nameImage}
                                className="form-control"
                                onClick={()=>{setFlagFile(true)}}
                                onChange={checkImage}
                                placeholder={props.systemLanguage==="rtl"?("קישור"):("Link")}
                                aria-label="UserImage"
                                aria-describedby="basic-addon1"/>
                                <label onClick={()=>{setFlagFile(false)}} onChange={checkImage} htmlFor="inputImage" className='labelImage'>
                                <BiImage/>{props.systemLanguage==="rtl"?(" בחר תמונה"):(" Select Image")}
                                    <input  id='inputImage'  type="file" className="d-none" accept="image/png, image/jpg, image/gif, image/jpeg" lang="pl-Pl"/>
                                </label>

                            </div>
                            <br/>
                            <button className=' btn btn-primary'>{props.systemLanguage==="rtl"?("התחבר"):("Login")}</button>
                        </form>
                </div>
            </div>
        )
}

export default SingUp
