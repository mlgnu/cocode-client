import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LoginCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className={cn("w-[400px]")}>
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      <CardFooter className="flex flex-col gap-2">
        <p className="text-center text-muted-foreground text-sm">
          Don't have an account?
          <a href="/register" className="text-sky-500">
            {" "}
            Register
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
