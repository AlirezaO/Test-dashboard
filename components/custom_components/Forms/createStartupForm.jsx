"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { submitEmail } from "@/app/actions/submitEmail";
import { toast } from "sonner";
import { createStartupSchema } from "@/utils/zodValidations/createStartup";

export default function CreateStartupForm() {
  const form = useForm({
    resolver: zodResolver(createStartupSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      category: "",
    },
  });
  console.log("FORM : ", form, createStartupSchema);

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="name"
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
      </form>
    </Form>
  );
}
