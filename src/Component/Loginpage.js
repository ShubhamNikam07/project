import { RxCross2 } from "react-icons/rx";
export const Loginpage = () => {
  const logiHandle = ()=>{
    document.querySelector(".image-back-login").classList.add("hide")
    document.querySelector(".image-back-signup").classList.remove("hide")
  }
  return (
  <div className="image-back image-back-login relative hide ">
    <div className="absolute left-[350px] p-2 -top-[500px] w-[800px] ">
    
      <div className="w-[750px] h-[553px] rounded-lg gap-2 mx-auto my-[10%] bg-[#FFFFFF]">
      <div className="text-center text-sm font-normal bg-[#EFFFF4] text-[#008A45] rounded-lg p-3">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now
        <RxCross2 className="absolute bg-white left-[740px] top-[40px] font-bold text-[20px] rounded-full cursor-pointer " onClick={()=>{document.querySelector(".image-back-login").classList.add("hide")}}/>
      </div>
      <div className="flex w-full gap-2 ">
        <div className="w-1/2 border-solid border-black flex flex-col gap-3">
          <span className="p-2 text-2xl font-bold self-start">Sign In</span>
          <div className=" flex flex-col m-[1px]">
                <input placeholder="Email" className="bg-[#F7F8FA] w-full font-medium text-base p-2 border-2" />
                <input placeholder="Password"  className="w-full bg-[#F7F8FA] font-medium text-base p-2  border-2"/>
           </div>
          <button type="button" className="w-full p-3 rounded-3xl text-white bg-[#3b82f6] font-semibold text-base leading-4 ">
           Sign In
          </button>    
                <button className="w-full border-1 border-black border-inherit p-1 font-normal text-base">
                        Sign Up With Facebook
                </button>
                <button className="w-full text-center border-1 border-black border-inherit p-1 font-normal text-base">
                        Sign Up with Google
                </button>
                <button>
                  <span className="text-xs font-medium">Forgot Password?</span>
                </button>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
            <span className="text-sm font-semibold mt-2" onClick={logiHandle}>Don’t have an account yet?  <span className="text-[#2F6CE5] text-sm ml-1">Create new for free!</span></span>
            <img src={require("../photo/atg_illustration.png")} className="w-[258px] h-[260px]"/>
            <p className="opacity-60 text-xs font-normal">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};
