import React from 'react'
import './css/navbar.css'
import { GrLanguage } from "react-icons/gr";
import { Link } from 'react-router-dom';
import validator from 'validator'

function Navbar(props) {

    const chechImg = ()=>{
        const nameImage = props.userLogin[0].image
        if (nameImage.indexOf('http://')===-1 && nameImage.indexOf('https://')===-1) {
            return `//localhost:8000/${props.userLogin[0].image}`;
        }
        debugger
        if (validator.isURL(nameImage)) {
            return nameImage;
        }
        return "https://icons-for-free.com/download-icon-friend+human+man+member+person+profile+user+users+icon-1320168707291252637_512.png";
    }

    return (
        <div className='first bg-success '>
            <div className='containerLanguage'>
                    <div className='language border border-dark bg-warning p-2'>
                        <GrLanguage className='pb-1'/>
                        <select className='languageSelect' onChange={(e)=>{props.changeLanguage(e.target.value)}}>
                            <option value="English">English</option>
                            <option value="Hebrew">Hebrew</option>
                        </select>         
                    </div>
            </div>
                    <div className='the_title_of_the_title'>      
                    <h1 className="mt-0 mt-lg-0 mt-lg-5">
                        {props.systemLanguage==="rtl"?("מערכת משימות"):("Task system")}
                    </h1>
                </div>

                    {props.userLogin?(
                        <div className='buttonsLogin d-flex flex-column justify-content-around mt-1 pb-2 align-items-center'>

                            <img className='picuser' src={chechImg()} alt="userImage" />
                            <Link to='/singin'><button className='btn btn-danger' onClick={()=>{props.logout()}}>{props.systemLanguage==="rtl"?("התנתק"):("logout")}</button></Link>
                        </div>
                    ):(
                        <div className='buttonsLogin d-flex flex-column justify-content-around mt-1 mt-lg-5 pb-2 flex-lg-row'>
                            <Link to='/singin'><button className='btn btn-primary mb-0 mb-1'>
                                {props.systemLanguage==="rtl"?("התחבר"):("Singin")}
                            </button></Link>
                            <Link to='/singup'><button className='btn btn-primary'>
                                {props.systemLanguage==="rtl"?("הרשמה"):("SingUp")}
                            </button></Link>
                        </div>
                    )}
        </div>
    )
}
export default Navbar