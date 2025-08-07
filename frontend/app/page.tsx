import { ModeToggle } from "@/components/toggle-theme";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <Link href='/login'>Login</Link>
      <Link href='/signUp'>Signup</Link>
    </>
  );
}
