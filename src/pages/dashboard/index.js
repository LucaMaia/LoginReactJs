import React from "react";
import "./styles.css"

//COMPONENTS
import {faFileCode, faList, faClipboardCheck, faCalendarCheck, faPaste, faHeadset, faFileSignature, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoCebas from "../../assets/img/CebasVetorizado.png";
import Listras from "../../assets/img/listras.png";

const File = <FontAwesomeIcon icon={faFileCode} />
const List = <FontAwesomeIcon icon={faList} />
const ClipBoard = <FontAwesomeIcon icon={faClipboardCheck} />
const CalendarCheck = <FontAwesomeIcon icon={faCalendarCheck} />
const Paste = <FontAwesomeIcon icon={faPaste} />
const Headset = <FontAwesomeIcon icon={faHeadset} />
const Signature = <FontAwesomeIcon icon={faFileSignature} />
const GraduationCap = <FontAwesomeIcon icon={faGraduationCap} />


const Dashboard = () => {

    return (
        <div className="background" >
            <div className="flex" >
                <div className="caixa" >
                    <div className="col-12 text-center">
                        <img src={logoCebas} alt="logo"  style={{minHeight:"300px"}} />
                    </div>

                    <div style={{display:"flex", flexWrap:"wrap",margin:"0 auto" , maxWidth:"100%", justifyContent:"center"}}>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{ClipBoard}</div>
                                <aside className="legenda1">Acompanhar solicitações</aside>
                                <img src={Listras} />
                            </a>
                        </div>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{Paste}</div>
                                <aside className="legenda1">Protocolar requerimento do CEBAS</aside>
                                <img src={Listras}/>
                            </a>
                        </div>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{CalendarCheck}</div>
                                <aside className="legenda1" >Renovar certificado</aside>
                                <img src={Listras} />
                            </a>
                        </div>


                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{File}</div>
                                <aside className="legenda1">Respostas a Diligências</aside>
                                <img src={Listras}/>
                            </a>
                        </div>
                    </div>

                    <div style={{display:"flex", flexWrap:"wrap",margin:"0 auto" , maxWidth:"100%", justifyContent:"center"}}>
                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{GraduationCap}</div>
                                <aside className="legenda1">Gerar Certificado</aside>
                                <img src={Listras}/>
                            </a>
                        </div>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{List}</div>
                                <aside className="legenda1">Timeline ciclo de vida do certificado</aside>
                                <img src={Listras}/>
                            </a>

                        </div>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{Headset}</div>
                                <aside className="legenda1">Chat</aside>
                                <img src={Listras}/>
                            </a>
                        </div>

                        <div style={{padding:'20px'}}>
                            <a href="/dashboard" className="link">
                                <div style={{position:"absolute",padding:"5px", color:"white"}}>{Signature}</div>
                                <aside className="legenda1">Cadastro</aside>
                                <img src={Listras}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;

