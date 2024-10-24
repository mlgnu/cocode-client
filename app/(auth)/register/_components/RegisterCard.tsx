import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function RegisterCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className={cn("w-[400px] lg:w-[900px]")}>
      <CardHeader>
        <CardTitle className="text-center">Register</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      <CardFooter className="flex flex-col gap-2">
        <p className="text-center text-muted-foreground text-sm">
          Already have an account?
          <a href="/login" className="text-sky-500">
            {" "}
            LogIn
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
