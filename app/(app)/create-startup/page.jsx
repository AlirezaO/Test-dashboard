import CreateStartupForm from "@/components/custom_components/Forms/CreateStartupForm";
import React from "react";

export default function () {
  return (
    <div
      className="
    w-1/4
    max-w-[500pxs]
    min-w-[300px]
    rounded-[20px]
    p-[5px]
    shadow-[0_15px_30px_-5px_#F4CF3C54]
    bg-[linear-gradient(144deg,#FFE140,#F48A3C_50%,#953F16)]
  "
    >
      <div className="bg-[#ffffff] rounded-[17px] w-full h-full p-[16px]">
        <CreateStartupForm />
      </div>
    </div>
  );
}
