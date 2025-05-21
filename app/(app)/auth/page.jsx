"use client";
import { signUpSchema } from "@/utils/zodValidations/signUp";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/auth";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GithubButton from "@/components/custom_components/Icons/GithubButton";
import { submitEmail } from "@/app/actions/submitEmail";
import { toast } from "sonner";

export default function () {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
    },
  });

  async function handleFormSubmit(values) {
    console.log("CLICKED:!1", values);
    const result = await submitEmail(values);
    if (result.status === "success") {
      toast.success(result.message);
      // console.log("SUCCESS", result.message);
    } else {
      toast.error(result.message);
      // console.log("ERROR", result.message);
    }
    // "use server";
    // await signIn("github", { redirectTo: "/" });
  }

  return (
    <div className="base-class w-3/10 min-w-[300px] bg-white rounded-[6px] p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription>Enter your email to sign in</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end items-center w-full">
            <GithubButton type="submit" className="cursor-pointer" />
          </div>
        </form>
      </Form>
    </div>
  );
}
