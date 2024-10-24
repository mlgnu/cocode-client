import { LogInFormType } from "@/app/(auth)/login/schema";
import { apiClient } from "@/lib/api.client";

export const registerUser = (user: LogInFormType) => {
  return apiClient.post("/auth/register", user);
};
