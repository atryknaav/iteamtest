'use client';
import { fetcher } from "@/hooks/useJobSearch";
import useSWR from "swr";
import { SWRProvider } from "../swr-provider";
import JobCard from "@/components/JobCard";
import { useState, useEffect } from "react";
import Header from "@/components/Header";


export default function Home() {
  const [query, setQuery] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');

  const { data, error, isLoading } = useSWR(searchQuery, fetcher);

  const handleSearch = () => {
    setSearchQuery(query);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <SWRProvider>
      <Header />
      <div className="min-h-screen p-4 bg-stone-900">
        <div className="w-[40%] mx-auto">
       
          <div className="mb-6 flex gap-6 items-center">
            <input
              type="text"
              defaultValue={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a job title..."
              className="w-full p-3 border-0 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 bg-stone-800 caret-red-100 text-white placeholder-zinc-400 focus:placeholder-transparent"
            />
            <button className="bg-orange-500 h-full text-white px-4 py-2 rounded-md" onClick={handleSearch}>
              Search
            </button>
            
          </div>

          {isLoading ? <div>Wait a minute please...</div> :
          <div className="flex flex-col gap-6">
            {data?.data.map((job: any, index: number) => (
              <div key={index} className="bg-stone-800 text-white rounded-lg shadow-md p-4">
                <JobCard
                  data={job}
                />
              </div>
            ))}
          </div>
          } 
        </div>
      </div>
    </SWRProvider>
  );
}
