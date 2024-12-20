"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}:{id:string}) {
  const router=useRouter();

  const removeTopic=async()=>{
    const confirmed=confirm("Are you sure you want to delete this topic?");
    if(confirmed){
      const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE",
      });
      if(res.ok){
        router.push("/");
      }else{
        throw new Error("Failed to delete topic");
      }
    }
  }

  return (
    <button className="text-red-500 mr-3" onClick={removeTopic} >
      <HiOutlineTrash />
    </button>
  );
}
