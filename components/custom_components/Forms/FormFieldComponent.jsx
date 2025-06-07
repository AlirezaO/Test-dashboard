"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormFieldComponent({ form, formField }) {
  switch (formField.type) {
    case "text":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <FormControl>
                <Input placeholder={formField.placeholder} {...field} />
              </FormControl>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );
    case "text-area":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );
    case "select":
      return (
        <FormField
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              {formField.label && <FormLabel>{formField.label}</FormLabel>}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={formField.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {formField.values.map((item, index) => (
                    <SelectItem
                      key={`fieldItem${item.label}`}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formField.description && (
                <FormDescription>{formField.description}</FormDescription>
              )}
              <FormMessage className="text-xs -mt-1" />
            </FormItem>
          )}
        />
      );

    default:
      break;
  }
}
