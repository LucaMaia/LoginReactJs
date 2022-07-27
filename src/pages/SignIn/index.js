import React from "react";
import BreadCrumbComponent from "../../components/breadcrumb";
import ButtonComponent from "../../components/button";
import InputComponent from "../../components/input";
import NavBarComponent from "../../components/navbar";
import App from "../../App";
// import Loading from "../../components/loading";
// import PopoverComponet from "../../components/popover";

const link = [
    { url: '/', titulo: 'Home'},
    { url: `/`, titulo: 'Lista Mantida'},
];

const SignIn = () => {
    return (
        <>
            <NavBarComponent
                link={link}
            />
            {/*<BreadCrumbComponent*/}
            {/*    link={link}*/}
            {/*    titulo={link.titulo}*/}
            {/*/>*/}
            <div style={{width:"40%",margin:"0 auto", textAlign:"center", borderRadius:"10px", padding:"30px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                <h1>Sign in</h1>

                <div>
                    <div style={{paddingBottom:"20px"}}>
                        <InputComponent
                            placeholder="Digite seu email"
                            type="text"
                            size="lg"
                            label="E-mail"
                        />
                    </div>

                    <div style={{paddingBottom:"20px"}}>
                        <InputComponent
                            placeholder="Digite a sua senha"
                            type="password"
                            size="lg"
                            label="Senha"
                        />
                    </div>
                </div>

                <br/>

                <ButtonComponent
                    variant="outline-primary"
                    size="lg"
                    message="Entrar!"
                />
                <br/>
                <span>Não tem cadastro? <a href="/signup">Se inscreva aqui!</a> </span>
            </div>

            {/*<Loading showModal={true}/>*/}
        </>
    );
};

export default SignIn;