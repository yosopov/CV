import React from "react";
import {Navigate} from "react-router-dom";

const ProtectedRoute = (props) => {
    if (!props.user) {
        if (props.loginOrSingUp) {
            return props.children;   
        }
        return <Navigate to="/"/>;
    }
    if (props.loginOrSingUp) {
        return <Navigate to="/"/>;
    }
    return props.children;
}

export default ProtectedRoute;
