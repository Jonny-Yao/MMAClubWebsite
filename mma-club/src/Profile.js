import React from "react";
import Image from 'react-bootstrap/Image'

function Profile({image, name, message}){
    return(
        <div className="profile">
            <h3 style={{textAlign:"center", fontFamily:"Arial Black"}}>{name}</h3>
            <Image src={image} style={{width: '300px', height:'350px'}} roundedCircle />
            <p>{message}</p>
        </div>
    );
}

export default Profile;