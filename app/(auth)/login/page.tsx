"use client";

import { loginUser } from "@/queries/auth/login.user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { LoginCard } from "./_components/LoginCard";
import { LoginForm } from "./_components/LoginForm";
import { LogInFormSchema, LogInFormType } from "./schema";

export default function LoginPage() {
  const form = useForm<LogInFormType>({
    resolver: zodResolver(LogInFormSchema),
  });
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("Login successful");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const loginSubmit = (formData: LogInFormType) => {
    console.log("submit");
    mutation.mutate(formData);
  };

  return (
    <div className="h-screen grid place-items-center">
      <LoginCard>
        <LoginForm form={form} onSubmit={loginSubmit} />
      </LoginCard>
    </div>
  );
}
