import DashboardGrid from "@/components/dashboard-grid";
import { BASE_URL } from "@/app/utils/config";

type paramsType={
    params:{
    slug:string
    }
}

async function ShareLink({ params }: paramsType) {
  const resolvedParams = await params;
  const id = resolvedParams.slug;
    
    const res=await fetch(`${BASE_URL}/share/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json" 
        }
    })

    if(!res.ok){
        return "could not get"
    }
    const data=await res.json()
    

  return (
    <>  
    <div className=""> 
       <h1 className="pb-6 text-center font-medium mt-2">{data.data.username}’s World 🌍</h1>
      <div><DashboardGrid content={data.data.content}/></div>
      </div>
    </>
  );
}

export default ShareLink;
