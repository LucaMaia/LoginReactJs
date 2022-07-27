import React from 'react';

const NavBarComponent = (props) => {
    let link = props.link || "";

    const handleClick = () => {
        let existeShow = document.querySelector("#div-teste").classList.contains("show");
        if (existeShow){
            document.querySelector("#div-teste").classList.remove('show');
        }else{
            document.querySelector("#div-teste").classList.add('show');
        }
    };

    return (
        <div className="br-menu" id="main-navigation" style={{position: 'relative', padding:"20px"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius:"10px", padding:"15px"}}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleClick()}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="div-teste" className="collapse navbar-collapse" style={{ minWidth:"100px"}}>
                    <ul className="navbar-nav" id="navbarNav">
                        {link.map((item,index)=>{
                                link.at(-1)
                                return (
                                    <li className="nav-item" style={{display:"flex", flexWrap:"wrap"}}>
                                        <a className="nav-link"  href={item.url}>
                                            {item.titulo}
                                        </a>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBarComponent;
