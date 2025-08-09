import DashboardGrid from "@/components/dashboard-grid";
import { getToken } from "@/app/utils/getToken";
import { BASE_URL } from "@/app/utils/config";

export default async function DashboardTwitterPage() {

  const token=await getToken()

  const res=await fetch(`${BASE_URL}/twitterContent`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })

  
  if(!res.ok){
    return "error fetching"
  }
  
  const data=await res.json()
  



  return (
    <>
    <div className="mt-6"> 
      <DashboardGrid content={data.content} />
      </div>
    </>
  );
}
