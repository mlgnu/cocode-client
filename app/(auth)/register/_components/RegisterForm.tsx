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
import { UseFormReturn } from "react-hook-form";
import { RegisterFormType } from "../schema";

type RegisterFormProps = {
  onSubmit: (data: RegisterFormType) => void;
  form: UseFormReturn<RegisterFormType>;
};

export function RegisterForm({ form, onSubmit }: RegisterFormProps) {
  const { formState: {isSubmitting} } = form;
  console.log(isSubmitting);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
      <div className="flex flex-col lg:flex-row lg:gap-4 place-content-center">
      <div className="flex-1">
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
            <FormItem
            >
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


        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password again"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>


        <div className="flex-1">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        </div>

        <SubmitButton
          disabled={isSubmitting}
          type="submit"
          className="w-full"
        >
          Register
        </SubmitButton>
      </form>
    </Form>
  );
}
