import DashboardGrid from "@/components/dashboard-grid";
import { cookies } from "next/headers";

export default async function DashboardAllPage() {

  const cookieStore=await cookies()
  const token=cookieStore.get("token")?.value
   
  const res=await fetch("http://localhost:8000/allContent",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })

  const data=await res.json()
  
  return (
    <>
     <div className="mt-3">
        <DashboardGrid content={data.content} />
      </div>
    </>
  );
}
