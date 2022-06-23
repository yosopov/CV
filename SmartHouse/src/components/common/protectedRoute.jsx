import { useHistory } from "react-router-dom";

const protectedRoute = ({component,idLocation})=>{
    let history = useHistory();
    const urlPathname =window.document.location.pathname;
    if(idLocation !==urlPathname){
        history.push("/");
       return ''
    }

    return component;
};

export default protectedRoute;