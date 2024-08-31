'use client'

import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";


export default function Home() {
  const [storedLikedJobs, setstoredLikedJobs] = useState([]);
  useEffect(() => {
    setstoredLikedJobs(JSON.parse(localStorage.getItem('likedJobs') || '[]'));
}, []);
  return (
    <div className="h-screen w-full bg-stone-900">
      <Header />
      <div className="flex flex-col w-[40%] mx-auto mt-4 gap-4">
        {storedLikedJobs.map((job: any, index: number) => (
          <div key={index} className="bg-stone-800 text-white rounded-lg shadow-md p-4">

            <JobCard data={job} />
          </div>
        ))}
      </div>
    </div>
  );
}
