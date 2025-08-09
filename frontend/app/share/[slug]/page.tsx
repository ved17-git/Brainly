import DashboardGrid from "@/components/dashboard-grid";
import React from "react";

type paramsType={
    params:{
    slug:string
    }
}

async function ShareLink({params}:paramsType) {
 
    const id=params.slug
    
    const res=await fetch(`http://localhost:8000/share/${id}`,{
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
    <div className="px-[12vh] py-6"> 
       <h1>Username :{data.data.username}</h1>
      <div><DashboardGrid content={data.data.content}/></div>
      </div>
    </>
  );
}

export default ShareLink;
