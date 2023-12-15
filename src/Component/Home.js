import { useContext, useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Followers } from "./Followers";
import { userContext } from "./Utils/Constants";
import {Signup} from "../Component/Signup";

export const Home = () =>{
    const {defaultName,defaultVal,setName,setStatus} = useContext(userContext);
    const [isLogIn,setisLogin] = useState("Join Group");
    const logHandler = ()=>{
        isLogIn =='Join Group'?setisLogin("Leave Group"):setisLogin("Join Group");
    }
    const handleLogIn = ()=>{
        return (
            setName("Sidharth Goyal"),
            setStatus(true)

        )
    }

    const handleLogOut = ()=>{
        return(
            setName("Its Free"),
            setStatus(false)
        )
    }

    return(
        
            <div className="relative home">
               <div className="image_back">
                    <div className="absolute w-[378px] h-[47px] top-[300px] left-[200px] text-3xl font-bold text-[#FFFFFF]">Computer Engineering</div>
                    <div className="absolute w-[327px] h-[27px] top-[350px] left-[200px] text-white">142,765 Computer Engineers follow this</div>
               </div>
                <div className="flex justify-between py-4 h-[21px] w-8/12 mx-auto text-base ">
                        <div className="flex text-[#8A8A8A] h-[21px] top-[560px] bottom-[200px] gap-3 w-8/12">
                            <div className="text-black">
                                <div>All Post(32)</div>  
                                <div className="mt-1 h-[1px] bg-black"></div>
                            </div>                       
                            <div>Article</div>
                            <div>Event</div>
                            <div>Education</div>
                            <div>Job</div>
                        </div> 
                    <div className="w-4/12">
                         <button type="button" className="btn btn-divght top-[552px] left-[966px] w-[133px] h-[36px] bg-[#EDEEF0]">Write a Post </button>                      
                        <span className="w-[125px] h-[36px] top-[552px] left-[966px] rounded btn btn-primary" onClick={logHandler}> {isLogIn}</span>
                        <div className="flex flex-col gap-4 ml-10">
                            <div className="flex justify-between mt-5">
                                <div className="flex gap-2">
                                    <img src={require("../photo/outline-location_on-24px.png")}/>
                                    <input  className="noidaval text-sm font-normal" value={"Noida, India"}/>
                                </div>
                                <img src={require("../photo/Vector (3).png")} className=" self-center w-[16px] h-[16px]"/>
                            </div>
                            <div className="flex">
                                <img src={require("../photo/baseline-error_outline-24px.png")} className="  h-[16px] w-[16px]"/>
                                <span className=" opacity-50 font-medium text-xs w-[220px] h-[32px]">Your location will help us serve better and extend a personalised experience.</span>
                            </div>
                          {
                             (isLogIn == "Leave Group")?(handleLogIn()):(handleLogOut())
                             
                          }
                          {
                            (isLogIn == "Leave Group")?<Followers/>:(<div></div>)
                          }
                         
                        </div>
                    </div> 
                </div>
                <div className="w-9/12 mx-auto border-solid bg-[#E0E0E0] p-[1px] mt-4"></div>
            </div>
    )
}














/*


<div className="h-[21px] w-[358px] flex justify-between ">
                        <ul className="flex justify-between w-[358px] h-[21px] top-[560px] bottom-[200px]">
                            <div className="flex flex-col">
                            <div>All Post</div>
                            <span className="w-[93px] top-[600px] left-[200px] border-[1px] border-black"></span>
                         
                            </div>
                            <div>Article</div>
                            <div>Event</div>
                            <div>Education</div>
                            <div>Job</div>
                        </ul>
                    </div> 
*/