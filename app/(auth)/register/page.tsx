"use client";
import { registerUser } from "@/queries/auth/register.user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { RegisterCard } from "./_components/RegisterCard";
import { RegisterForm } from "./_components/RegisterForm";
import { RegisterFormSchema, RegisterFormType } from "./schema";

export default function RegisterPage() {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      console.log("Login successful");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const registerSubmit = (formData: RegisterFormType) => {
    mutation.mutate(formData);
  };

  return (
    <div className="h-screen grid place-items-center">
      <RegisterCard>
        <RegisterForm form={form} onSubmit={registerSubmit} />
      </RegisterCard>
    </div>
  );
}
