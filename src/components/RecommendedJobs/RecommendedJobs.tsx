import { Profile } from '@/app/jobs/page';
import { fetcher } from '@/hooks/useJobSearch';
import React, { FormEvent, useEffect, useState } from 'react'
import { VscLoading } from 'react-icons/vsc';
import useSWR from 'swr';
import JobCard from '@/components/JobCard';

const RecommendedJobs = () => {
  const [desiredJob, setDesiredJob] = useState<string | null>(null);

  useEffect(() => {
    const profileString = localStorage.getItem('profile');
    if (profileString) {
        const profile: Profile = JSON.parse(profileString);
        setDesiredJob(profile.desiredJob);
    }
  }, []);

  const {data, error, isLoading} = useSWR(desiredJob, fetcher);

  if(error) return <div className='text-white'>{error.message}</div>
  if(isLoading) return <div className='text-white'>Loading</div>
    
  return (
    <div className='flex flex-col gap-4'>
      <div className=' text-white text-2xl'>
        Suggested for you:
      </div>

    {data?.data.map((job: any, index: number) => (
      <div key={index} className="bg-stone-800 text-white rounded-lg shadow-md p-4">
        <JobCard
          data={job}
        />
      </div>
    ))}
    </div>
  )
}

export default RecommendedJobs