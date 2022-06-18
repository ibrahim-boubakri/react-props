import React from "react";
const Profile = ({fullName,bio,profession}) =>{
     return (
    <div style={{textAlign: 'center'}}>
       <h1> {fullName} </h1>
       <h1> {bio} </h1>
       <h1> {profession} </h1>
      
    </div>
     )
    }
export default Profile;
