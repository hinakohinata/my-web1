import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Posts from "../Posts";

class ProfileUser extends React.Component {
    // this.state;
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <FontAwesomeIcon icon={faCoffee} />abc
            </div>
        )
    }
}
const ProfileFunc = (name) => {
    console.log(name)
    return (
        <div>
            <h1>Hello {name.name1} {name.nganh}</h1>
            <FontAwesomeIcon icon={faCoffee} />abc
        </div>
    );
}

function Class() {
    const [nganh,setNganh]=useState("UDPM1")
    // const [data,setData]=useState([])
    const hanldChage = (event)=>{
        console.log("event")
        setNganh(document.getElementById("txtNganh").value)
    }
    const hanldOnChageInput = (event)=>{
        console.log(event)
        if(event.code==="Enter" || event.code === "NumpadEnter")//if(event.charCode===13)
        setNganh(document.getElementById("txtNganh").value)
    }
    return (
        <div>
            <ProfileUser />
            <ProfileFunc
                name1="Hina"
                nganh={nganh} />
            <input onKeyPress={hanldOnChageInput} id="txtNganh"></input>
            <button onClick={hanldChage} >Add</button>
            {/* <Posts posts={data}></Posts> */}
            <div class="container">
                
      <Posts />
            </div>
        </div>
    )
}
export default Class;