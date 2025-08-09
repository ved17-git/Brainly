import DashboardGrid from "@/components/dashboard-grid";
import { getToken } from "@/app/utils/getToken";

export default async function DashboardYouTubePage() {

  const token=await getToken()

  const res=await fetch("http://localhost:8000/youtubeContent",{
    method:"GET",
    headers:{
           "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
    },
  })

  if(!res.ok){
    return "Error fetching"
  }
  const data=await res.json()


  console.log(data);



  return (
    <>
      <DashboardGrid content={data.content} />

    </>
  );
}
