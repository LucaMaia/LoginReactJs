import React from "react";
import NavBarComponent from "../../components/navbar";
import BreadCrumbComponent from "../../components/breadcrumb";
import InputComponent from "../../components/input";
import ButtonComponent from "../../components/button";

import {faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const File = <FontAwesomeIcon icon={faFileCode} />

const link = [
    { url: '/', titulo: 'Home'},
    { url: `/`, titulo: 'Lista Mantida'},
];

const SignUp = () => {
    return (
        <>
            <NavBarComponent
                link={link}
                titulo={link.titulo}
            />
            {/*<BreadCrumbComponent*/}
            {/*    link={link}*/}
            {/*    titulo={link.titulo}*/}
            {/*/>*/}
            <div style={{width:"50%",margin:"0 auto", textAlign:"center", borderRadius:"10px", padding:"30px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                <h1>Sign Up</h1>

                <div>
                        <div style={{display:"flex",paddingBottom:"10px"}}>
                            <div style={{padding:"10px"}}>
                                <InputComponent
                                    placeholder="Digite o seu e-mail."
                                    type="text"
                                    size="lg"
                                    label="E-mail"
                                />
                            </div>

                            <div style={{padding:"10px"}}>
                                <InputComponent
                                    placeholder="Confirme o seu e-mail."
                                    type="text"
                                    size="lg"
                                    label="Confirme o seu e-mail"
                                />
                            </div>
                        </div>

                        <div style={{display:"flex"}}>
                            <div style={{padding:"10px"}}>
                                <InputComponent
                                    placeholder="Digite a sua senha."
                                    type="password"
                                    size="lg"
                                    label="Senha"
                                />
                            </div>
                            <div style={{padding:"10px"}}>
                                <InputComponent
                                    placeholder="Confirme a sua senha."
                                    type="password"
                                    size="lg"
                                    label="Confirme a sua senha"
                                />
                            </div>
                        </div>
                    </div>





                <br/>

                <ButtonComponent
                    variant="outline-primary"
                    size="lg"
                    message="Cadastrar!"
                    ico={File}
                    image=""
                />
                <br/>
                <span>Já tem cadastro? <a href="/signin">Entre aqui!</a> </span>

            </div>

            {/*<Loading showModal={true}/>*/}
        </>
    );
};

export default SignUp;