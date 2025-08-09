import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="text-muted-foreground">
        Please sign up or log in to continue
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/signUp">Sign Up</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
