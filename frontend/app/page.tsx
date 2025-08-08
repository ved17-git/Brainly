import Link from "next/link"


export default function Home() {
  // redirect("/dashboard")
  return(<> 
    <div>
      <Link href="/signUp">Sign up</Link> <br />
      <Link href="/login">Login</Link>
    </div>
  </>)
}
