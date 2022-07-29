import React  from 'react';

const BreadCrumbComponent = props => {
    let link = props.link || "";

    return (
        <div style={{position: 'relative', padding:"20px"}}>
            <nav aria-label="breadcrumb" >

                <ol className="breadcrumb" style={{justifyContent:"center"}}>
                    {link.map((item)=>{
                            return (
                                <li >
                                    <a href={item.url} style={{textDecoration:"none", fontSize:"24px", margin:"20px"}}>
                                        {item.titulo}
                                    </a>
                                </li>
                            )
                        }
                    )}
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbComponent;
