import DashboardGrid from "@/components/dashboard-grid";
import { cookies } from "next/headers";
import { BASE_URL } from "../utils/config";

export default async function DashboardAllPage() {

  const cookieStore=await cookies()
  const token=cookieStore.get("token")?.value
   
  const res=await fetch(`${BASE_URL}/allContent`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })

  const data=await res.json()
  
  return (
    <>
     <div className="mt-6">
        <DashboardGrid content={data.content} />
      </div>
    </>
  );
}
