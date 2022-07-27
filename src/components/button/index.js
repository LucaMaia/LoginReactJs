import React from "react";
import {Button} from 'react-bootstrap';


const ButtonComponent = (props) => {
    return (
        <>
            <Button
                variant={props.variant}
                size={props.size}
                active={props.active}
                disabled={props.disabled}
                placeholder={props.placeholder}
                href={props.href}
                loading={props.loading}
            >
                {
                    props.ico ?
                        <i className={`fas ${props.message ? "mr-1" : ""} `} aria-hidden="true"> {props.ico} </i>
                        :
                        ""
                }

                {
                    props.message ?
                        props.message : ""
                }

                {
                    props.image ?
                        <span style={{marginLeft:"5px"}}>
                        <img src={props.image} alt="logo"/>
                    </span>
                        :
                        ""
                }

            </Button>
        </>
    );
};

export default ButtonComponent;