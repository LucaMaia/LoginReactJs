import React from "react";

//COMPONENTS
import Button from "../../components/button";

import {Popover, Whisper} from "rsuite";
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css'

const SignIn = <FontAwesomeIcon icon={faSignInAlt } />

const PopoverComponet = (props) => {

    let auth = props.auth;

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        console.log("handleLogout");
        window.location="/"
    }

    return (

        <div>
            <Whisper trigger="click"

                     placement='bottom'

                     style={{alignItems: "center"}}

                     speaker={

                         <Popover style={{position:'absolute', right:10, width:'400px', zIndex:9999, textAlign:'center'}}>

                             <h6 style={{padding: "10px"}}>{auth.nome}</h6>
                             <p>{auth.email}</p>
                             <p >{auth.titulo}</p>
                             <p >{auth.cpf}</p>

                             <br/>

                             <Button appearance="subtle"
                                     backgroundDiv={false}
                                     background="secondary"
                                     titulo="Log Out"
                                     ico={SignIn}
                                     typeButton="submit"
                                     className="botao"
                                     onClick={(e) => handleLogout(e)}

                             />
                         </Popover>
                     }
            >
                <button className="br-sign-in primary circle mt-3 mt-sm-0 ml-sm-3" type="button"
                        aria-label="cone ilustrativo"><i className="fas fa-user" aria-hidden="true"></i>
                </button>
            </Whisper>
        </div>
    )
}

export default PopoverComponet;
