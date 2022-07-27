import React  from 'react';

const BreadCrumbComponent = props => {
    let link = props.link || "";

    return (
        <div style={{position: 'relative', padding:"20px"}}>
            <nav aria-label="breadcrumb" >
                <ol className="breadcrumb" style={{justifyContent:"right"}}>
                    {link.map((item)=>{
                            return (
                                <li className="breadcrumb-item">
                                    <a href={item.url}>
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
