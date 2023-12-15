import { useState } from "react";
import {FaThumbsUp} from "react-icons/fa";

export const Followers = ()=>{
    const[follow,setFollow] = useState("follow");
    const isFollow = (e)=>{
        e.preventDefault();
        const a = e.target.textContent ==("follow")?("Followed"):("follow");
        e.target.textContent = a;
        e.target.style = "bg-black";
        if(e.target.textContent == "Followed"){
            e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';}
    }

    return(
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 tracking-wide">
                <FaThumbsUp/>
                <span>Recommended Groups</span>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 items-center gap-y-6">
                
            
                <img src={require("../photo/follow1.png")}/>
                <span className="">Liesure</span>
                <button  class="bg-[#EDEEF0] rounded-lg py-[3px]" onClick={isFollow}>{follow}</button>
                
                <img src={require("../photo/follow2.png")}/>
                <span className="">Activism</span>
                <button  class="bg-[#EDEEF0] rounded-lg py-[3px]" onClick={isFollow}>follow</button>

                <img src={require("../photo/follow3.png")}/>
                <span className="">MBA</span>
                <button  class="bg-[#EDEEF0] rounded-lg py-[3px]" onClick={isFollow}>follow</button>

                <img src={require("../photo/follow4.png")}/>
                <span className="">Philosophy</span>
                <button  class="bg-[#EDEEF0] rounded-lg py-[3px]" onClick={isFollow} >follow</button>
            </div>
            <div className="self-end h-[16px] w-[60px] text-[#2F6CE5] text-xs mt-4">
                see more...
            </div>
        </div>
    )
}