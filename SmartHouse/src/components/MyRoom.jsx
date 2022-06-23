import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import AirConditionerOff from '../pic/picAirConditionerOff.png';
import AirConditionerOn from '../pic/picAirConditionerOn.png';
import BoilerOff from '../pic/picBoilerOff.png';
import BoilerOn from '../pic/picBoilerOn.png';
import LampOff from '../pic/picLampOff.png';
import LampOn from '../pic/picLampOn.png';
import StereoSystemOff from '../pic/picStereoSystemOff.png';
import StereoSystemOn from '../pic/picStereoSystemOn.png';
import randomId  from 'random-id';
import '../cssComponents/myRoom.css';


export default function MyRoom(props) {
    const [product,setProduct] = useState('Air Conditioner');
    
    const selectProduct=(value)=>{
        setProduct(value);
    }


    const sendProduct=()=>{
        const products = props.room[0].products
        if (products.length<5) {
            const boiler = products.filter(e=>{
                return e.product==='Boiler'
            })
            if (boiler.length>0 && product==='Boiler') {
               return alert('Too many boilers')
            }
             return props.saveArrRome(props.room[0].id,[...props.room[0].products,{product:product,onOrOff:false,id:randomId(30,'room')}]) 
        }
    }
    const saveProduct=()=>{       
            props.saveArrRome(props.arrRoom)                 
    }
    

    const showPic=(e)=>{
        if ( e.product==='Air Conditioner' &&!e.onOrOff) {
            return AirConditionerOff
        }
        if ( e.product==='Air Conditioner' &&e.onOrOff) {
            return AirConditionerOn
        }
        if ( e.product==='Stereo System' &&!e.onOrOff) {
            return StereoSystemOff
        }
        if ( e.product==='Stereo System' &&e.onOrOff) {
            return StereoSystemOn
        }
        if ( e.product==='Lamp' &&!e.onOrOff) {
            return LampOff
        }
        if ( e.product==='Lamp' &&e.onOrOff) {
            return LampOn
        }
        if ( e.product==='Boiler' &&!e.onOrOff) {
            return BoilerOff
        }
        return BoilerOn
    }
    const changeOnOrOff=(e)=>{
        debugger
        const products =  props.room[0].products.map(element=>{
            if (e.id === element.id) {
                let changeProduct = e;
                if (!e.onOrOff) {
                    changeProduct.onOrOff = true
                }else changeProduct.onOrOff = false
                return changeProduct
            }
            return element
        })
        props.saveArrRome(props.room[0].id,products)
    }
    return (
        <div>
            <h4 className='h4MyRoom'>Name room:{props.room[0].appNameRoom}</h4>
            <h4 className='h4MyRoom'>Room type:{props.room[0].appTypeRoom}</h4>
            {props.room[0].products.length<5?
            (
                    <div>
                        <p/>
                        <select onChange={(e)=>{selectProduct(e.target.value)}} className="custom-select" id="inputGroupSelect01">
                            <option value='Air Conditioner'>Air Conditioner</option>
                            {props.room[0].appTypeRoom==='Bethroom'?(
                                <option value='Boiler'>Boiler</option>
                            ):(
                            ''
                            )}
                            <option value='Stereo System'>Stereo System</option>
                            <option value='Lamp'>Lamp</option>
                        </select><p/>
                        <button className="btn btn-primary btn-sm" onClick={sendProduct}>Create</button>
                    </div>
            ):(
                ''
            )}

            {props.room[0].products.length>0?
            (
                props.room[0].products.map(e=>{
                    return(
                     <img onClick={()=>{changeOnOrOff(e)}}
                      style={e.onOrOff?({backgroundColor:'green'}):({backgroundColor:'pink'})}
                      key={e.id}
                      className='pic-Product'
                      src={showPic(e)}
                      alt={e.product}/>
                    )
                })
            ):(
                ""
            )}
            <p/>
            <Link  to='/'><div><button className="btn btn-primary btn-lg btn-block" onClick={saveProduct}>Take Me Home</button></div></Link>
            
            
        </div>
    )
}
