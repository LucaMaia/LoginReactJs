import React, {Fragment} from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Footer from "../components/footer";

// Páginas
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/dashboard";

const Private = ({Item}) => {
    const signed = false;
    return signed > 0 ? <Item/> : <SignIn/>
}

const RoutesApp = () => {
    return (
       <BrowserRouter>
           <Fragment>
               <Routes>
                   <Route exact path="/home" element={<Private Item={Home}/>}/>
                   <Route exact path="/dashboard" element={<Dashboard/>}/>
                   <Route exact path="/" element={<SignIn/>}/>
                   <Route exact path="/signup" element={<SignUp/>}/>
                   <Route exact path="/*" element={<SignIn/>}/>
               </Routes>
           </Fragment>
           <Footer/>
       </BrowserRouter>
    );
};

export default RoutesApp;