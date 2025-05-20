"use client";
import { signUpSchema } from "@/utils/zodValidations/signUp";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function () {
  const form = useForm({
    resolver: zodResolver(signUpSchema),

    defaultValues: {
      email: "",
    },
  });
  return (
    <div className="base-class w-3/10 min-w-[300px] bg-white rounded-[6px] p-4">
      page
    </div>
  );
}
