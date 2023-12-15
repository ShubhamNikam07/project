import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Loginpage } from "./Loginpage";

export const Signup = () => {
  const signInHandle = ()=>{
     document.querySelector(".image-back-signup").classList.add("hide")
     document.querySelector(".image-back-login").classList.remove("hide")
    }
  return (
  <div className="image-back relative image-back-signup -top-[570px]">
    {/* <RxCross2 className="absolute left-[1090px] font-bold text-[18px] rounded-full cursor-pointer top-[125px]"/> */}
      <div className="w-[750px] h-[553px] rounded-lg   gap-2 mx-auto my-[10%] bg-[#FFFFFF]">
      <div className="text-center text-sm font-normal bg-[#EFFFF4] text-[#008A45] rounded-lg p-3">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now
        <RxCross2 className="absolute bg-white right-[330px] -top-[40px] font-bold text-[20px] rounded-full cursor-pointer " onClick={()=>{document.querySelector(".image-back-signup").classList.add("hide")}}/>
   
      </div>
      <div className="flex w-full gap-2">
        <div className="w-1/2 border-solid border-black flex flex-col gap-3">
          <span className="p-2 text-2xl font-bold">Create Account</span>
          <div className=" flex flex-col gap-1">
               <div className="flex w-full">
                    <input placeholder="First Name" className="bg-[#F7F8FA] w-1/2 font-medium text-base p-1 border-2"/>
                    <input placeholder="Last Name"  className="bg-[#F7F8FA] w-1/2 font-medium text-base p-1 border-2"/>
               </div>
                <input placeholder="Email" className="bg-[#F7F8FA] w-full font-medium text-base p-1 border-2" />
                <input placeholder="Password"  className="w-full bg-[#F7F8FA] font-medium text-base p-1  border-2"/>
                <input placeholder="Confirm Password" className="w-full bg-[#F7F8FA] font-medium text-base p-1 border-2"/>
            </div>
          <button type="button" className="w-full p-2 rounded-lg text-white bg-[#3b82f6] font-semibold text-base leading-4 ">
            Create Account
          </button>    
                <button className="w-full border-1 border-black border-inherit p-1 font-normal text-base">
                        Sign Up With Facebook
                </button>
                <button className="w-full text-center border-1 border-black border-inherit p-1 font-normal text-base">
                        Sign Up with Google
                </button>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
            <span className="text-sm font-semibold mt-2">Already Have An Account<span className="text-[#2F6CE5] text-sm ml-1 cursor-pointer" onClick={signInHandle}>Sign In</span></span>
            <img src={require("../photo/atg_illustration.png")} className="w-[258px] h-[260px]"/>
            <p className="opacity-60 text-xs font-normal">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
  </div>
  );
};
