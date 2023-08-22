import Image from "next/image";
import React from "react";
import {FcGoogle} from "react-icons/fc"

function login() {
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="flex items-center justify-center gap-2 text-white">
      <Image 
      src="/whatsapp.gif" alt="Whatsapp" 
      height={300} width={300}
      
      />
      <span className="text-7xl">Whatsapp</span>
    </div>
    <button>
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl">Login white Google</span>
    </button>
  </div>;
}

export default login;
