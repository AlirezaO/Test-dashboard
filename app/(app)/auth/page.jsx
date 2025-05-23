import React from "react";
import EmailForm from "@/components/custom_components/Forms/EmailForm";
import GithubButton from "@/components/custom_components/Icons/GithubButton";

export default function () {
  return (
    <div className="base-class w-3/10 min-w-[300px] bg-white rounded-[6px] p-4">
      <EmailForm />
      <div className="flex justify-end items-center w-full">
        <GithubButton />
      </div>
    </div>
  );
}
