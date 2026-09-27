import { useEffect, useState } from "react";

function Body(){
    const [profile,setProfile] = useState([]);
    const [numberofprofile,setnumberofprofile] = useState("");
    async function generateprofile(count){
        const response = await fetch(`https://api.github.com/users?since=6000&per_page=${count}`);
        const data =await response.json();
        setProfile(data);
    }
    useEffect(()=>{
    generateprofile()
    },[]);
    
    return(
        <div id="search">
            <input type="text" placeholder="Number of Profile Search" className="input" value={numberofprofile}  onChange={(e)=>setnumberofprofile(e.target.value)}></input>
            <button id="submit" onClick={()=>generateprofile(Number(numberofprofile))}>Submit</button>
        <div className="profile">  
            {
                profile.map((value)=>{
                    return(<div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">profile</a>
                    </div>)
                })
            }
        </div>
    </div>    
    )
    
}
export default Body;