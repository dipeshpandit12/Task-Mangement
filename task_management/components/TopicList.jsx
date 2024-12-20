import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

export default function TopicList() {
  return (
    <>
        <div className="flex justify-between px-4 py-4 outline outline-1 outline-white rounded-md mx-3 my-3">
            <div className="flex flex-col py-4 space-y-3">
                <h2 className="text-2xl font-bold">Topic Title</h2>
                <p className="text-gray-500">Topic Description</p>
            </div>
            <div className="flex flex-row items-start py-4 space-x-2 px-2">
               <RemoveBtn />
               <Link href={'/editTopic/123'}>
                <HiPencilAlt />
               </Link>
            </div>
        </div>
    </>
  );
}