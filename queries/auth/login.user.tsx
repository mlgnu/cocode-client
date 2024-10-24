import { LogInFormType } from "@/app/(auth)/login/schema";
import { apiClient } from "@/lib/api.client";

export const loginUser = (user: LogInFormType) => {
  return apiClient.post("/auth/login", user);
};
