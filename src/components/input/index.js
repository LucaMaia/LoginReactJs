import React , {useState}from "react";
import {Form} from 'react-bootstrap';
import InputMask from 'react-input-mask';

import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const EyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
const Eye = <FontAwesomeIcon icon={faEye} />

const InputComponent = (props) => {
    const [inputtype, setInputtype] = useState(props.type);

    const mostraSenha =()=> {
        if (inputtype === "password"){
            setInputtype("text")
        }else{
            setInputtype(props.type)
        }
    }

    return (
        <div className={`br-input  ${props.customClass || ''}  ${props.button && 'input-button'} `}>

            <div className="input-label">
                <label htmlFor={props.id}>{props.label}</label>
            </div>

            <div className="input-icon">
                <i>
                    {props.ico}
                </i>
            </div>

            <Form.Control
                size={props.size}
                type={props.type}
                placeholder={props.placeholder}
                onClick={props.onClick}
            />


            {/*    props.button*/}
            {/*    &&*/}
            {/*    <button className="br-button" type="button" aria-label="Mostrar senha" onClick={mostraSenha}>*/}
            {/*        <i className="fas" aria-hidden="true">*/}
            {/*            {props.type === "password" ? EyeSlash : Eye}*/}
            {/*        </i>*/}
            {/*    </button>*/}
            {/*}*/}

            {/*<div className="input-group" >*/}
            {/*    <div className="input-icon">*/}
            {/*        <i className={`fas`} >*/}
            {/*            {props.ico}*/}
            {/*        </i>*/}
            {/*    </div>*/}
            {/*    { props.mask==="" ?*/}
            {/*        <input  id={props.id} value={props.value || ''} type={props.type}  placeholder={props.placeholder || ''} disabled={props.disabled} /> :*/}
            {/*        <InputMask onChange={props.change} onBlur={props.blur} value={props.value || ''}  disabled={props.disable } {...props}/>*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
};

export default InputComponent;