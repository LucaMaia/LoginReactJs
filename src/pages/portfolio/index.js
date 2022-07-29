import React from "react";
import Background from "../../assets/img/background-image.png";
import Avatar from '@mui/material/Button';


//COMPONENTS
import NavBarComponent from "../../components/navbar";
import BreadCrumbComponent from "../../components/breadcrumb";

//FONTAWESOME
import { faWhatsapp, faInstagram, faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconsComponent from "../../components/icons";

const Whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const Instagram = <FontAwesomeIcon icon={faInstagram} />
const Github = <FontAwesomeIcon icon={faGithub} />
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />


const linkNavbar = [
    { url: '/', titulo: 'Home'},
    { url: `/`, titulo: 'Lista Mantida'},
];

const linkBreadcrumb = [
    { url: '/', titulo: 'Sobre mim'},
    { url: `/`, titulo: 'Portfólio'},
    { url: `/`, titulo: 'Contato'},
    { url: `/`, titulo: 'Skills'},
    { url: `/`, titulo: 'Projects'},


];

const linkIcons = [
    { href: '/', icon: {Whatsapp}},
    { href: `/`, icon: {Instagram}},
    { href: `/`, icon: {Github}}
];

const Portfolio = () => {
    return (
        <div style={{
            textAlign:"center",
        }}>
            <div style={{
                backgroundImage: `url(${Background})`,
                height:"100vh",
                width:"100vw",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <NavBarComponent
                    title="Ecebas"
                    link={linkNavbar}
                />


                <h1>Luca Lins Maia Vieria de Oliveira </h1>

                    <div style={{width:"40%",margin: "30px auto"}}>
                        <h4>Olá , eu me chamo Luca. Sou Estudante de análise e desenvolvimento de sistemas e estou no 5° quinto semestre do curso. Trabalho como programador Freelancer criando soluções para os mais diversos problemas que você possa vir a ter na sua empresa. Inovação é a minha paixão . </h4>
                            <br/>
                            <h4>Venha fazer seu orçamento conosco!</h4>
                    </div>

                <div className="mb-3" id="image">
                    <span className="br-avatar mr-3" title="Fulano da Silva" >
                        <span className="image" >
                            <img src="https://avatars.githubusercontent.com/u/65935751?s=400&u=a3465c186fed85be2a453704baebc2f922c88730&v=4" alt="Avatar" style={{borderRadius:"50%", width:'250px'}}/>
                        </span>
                    </span>
                </div>


                {/*<IconsComponent*/}
                {/*    link={linkIcons}*/}
                {/*/>*/}

                <div style={{fontSize:"40px",}}>
                    <a style={{padding:"10px"}} href="/">
                        {Whatsapp}
                    </a>

                    <a style={{padding:"10px"}} href="https://www.instagram.com/lucalmaia/">
                        {Instagram}
                    </a>

                    <a style={{padding:"10px"}} href="https://github.com/LucaMaia">
                        {Github}
                    </a>

                    <a style={{padding:"10px"}} href="https://www.linkedin.com/in/luca-maia-6a06581a9/">
                        {Linkedin}
                    </a>

                </div>

                {/*<Loading showModal={true}/>*/}

                <hr style={{width:"50%", margin:"20px auto"}}/>

                <BreadCrumbComponent
                    link={linkBreadcrumb}
                />
            </div>

        </div>
    );
};

export default Portfolio;