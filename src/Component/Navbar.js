import { IoIosSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useContext } from "react";
import { userContext } from "./Utils/Constants";
import '../../src/App.css';

export const Navbar = ()=>{
    const {defaultName,defaultVal,statusIs} = useContext(userContext);
    return(
        <div className="flex justify-around p-4 navbar md:hidden">
            <img src={require("../photo/whole.png")} className="w-[162px] h-[24px]"/>
            <div className="flex bg-[#F2F2F2] p-3 rounded-3xl justify-between gap-2"> 
                <IoIosSearch className=""/>
                <span className="text-[14px]">Search for your favorite groups in ATG</span>
            </div>
           <div className="flex gap-2 font-semibold">
            {
               (!statusIs)?
                (<div className="w-[183px] h-[21px] text-base mr-2">{defaultName}<span className="text-[#2F6CE5] ml-1 cursor-pointer " onClick={()=>{document.querySelector(".image-back-signup").classList.remove("hide")}} >{defaultVal}</span></div>):
                (<><img src={require("../photo/Rectangle 3 (1).png")}/> <span className="text-[#2F6CE5] ml-2">{defaultVal}</span></>)
}
            <span className="mt-1"><FaCaretDown/></span>
           </div>
        </div>
    )
}