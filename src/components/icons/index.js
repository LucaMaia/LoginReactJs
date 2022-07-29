import React from "react";

const IconsComponent = (props) => {
    let link = props.link || "";

    return (
        <div>
                <div style={{fontSize:"40px",}}>
                    <>
                    {link.map((item)=>{
                        return (
                                <a style={{padding:"10px"}} href={item.href}>
                                    {props.icon}
                                </a>
                        )}
                    )}
                    </>

                </div>

        </div>
    );
};

export default IconsComponent;