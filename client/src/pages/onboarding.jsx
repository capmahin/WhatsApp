import React from "react";
import Image from "next/image"

function onboarding() {
  return <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
    <div className="flex items-center justify-center gap-2">
    <Image
    src="/whatsapp.gif"
    alt="whatsapp"
    height={300}
    width={300}
    />
    <span className="text-7xl">Whatsapp</span>
    </div>
    <h2 className="text-7xl">Create your profile</h2>
  </div>;
}

export default onboarding;
