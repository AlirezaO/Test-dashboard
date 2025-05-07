"use client";

import { useRouter } from "next/navigation";

export const SubmitButton = ({ href }) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("CLICKED!!!");
    router.push(href);
  };
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:scale-104 transition-transform duration-300"
      onClick={handleClick}
    >
      Submit
    </button>
  );
};
