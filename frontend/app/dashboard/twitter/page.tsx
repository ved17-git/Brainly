import DashboardGrid from "@/components/dashboard-grid";
import { getToken } from "@/app/utils/getToken";

export default async function DashboardTwitterPage() {

  const token=await getToken()

  const res=await fetch("http://localhost:8000/twitterContent",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })

  console.log(res);
  
  if(!res.ok){
    return "error fetching"
  }
  
  const data=await res.json()
  console.log(data);
  



  return (
    <>
      <DashboardGrid content={data.content} />
    </>
  );
}
