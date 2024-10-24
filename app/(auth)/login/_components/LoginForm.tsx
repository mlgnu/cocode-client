"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/submit.button";
import { UseFormReturn, useFormState } from "react-hook-form";
import { LogInFormType } from "../schema";

type LoginFormProps = {
  onSubmit: (data: LogInFormType) => void;
  form: UseFormReturn<LogInFormType>;
};

export function LoginForm({ form, onSubmit }: LoginFormProps) {
  const { isSubmitting } = useFormState({control: form.control})
  console.log(isSubmitting)
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          disabled={isSubmitting}
          type="submit"
          className="w-full"
        >
          Login
        </SubmitButton>
      </form>
    </Form>
  );
}
