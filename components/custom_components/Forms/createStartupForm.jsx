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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FormFieldComponent from "./FormFieldComponent";

export default function CreateStartupForm() {
  const formFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter a name for your startup",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Write a description for your startup",
      type: "text-area",
    },
    {
      name: "image",
      label: "Image",
      placeholder: "Add an image for your startup",
      description: "Add an image for your startup",
      type: "text",
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Select a category for your startup",
      values: [
        { value: "edu", label: "Education" },
        { value: "tech", label: "Technology" },
        { value: "info", label: "Information" },
      ],
      type: "select",
    },
  ];

  const selectFields = formFields
    .filter((field) => field.type === "select")[0]
    .values.map((field) => field.value);

  const form = useForm({
    resolver: zodResolver(createStartupSchema({ selectFields })),
    defaultValues: formFields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: "",
      }),
      {}
    ),
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="w-full flex flex-col gap-4"
      >
        {formFields.map((formField, index) => (
          <FormFieldComponent
            key={`formField${index}`}
            form={form}
            formField={formField}
          />
        ))}
        <Button type="submit" className="cursor-pointer mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
}
