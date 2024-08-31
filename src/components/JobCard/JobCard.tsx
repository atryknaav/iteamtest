'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

type JobData = {
    data: {
        employer_name: string;
        employer_logo: string | null;
        job_id: string;
        job_title: string;
        job_min_salary: number;
        job_max_salary: number;
        job_posted_at_datetime_utc: string;
        job_city: string;
        job_state: string;
    }
}

const JobCard: React.FC<JobData> = ({ data }) => {
    const { job_title, employer_logo, employer_name, job_min_salary, job_max_salary, job_posted_at_datetime_utc, job_city, job_state, job_id } = data;

    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        const storedLikedJobs = JSON.parse(localStorage.getItem('likedJobs') || '[]');
        setLiked(storedLikedJobs.some((job: any) => job.job_id === job_id));
    }, [job_id]);

    const handleLike = () => {
        const storedLikedJobs = JSON.parse(localStorage.getItem('likedJobs') || '[]');

        if (liked) {
            const updatedLikedJobs = storedLikedJobs.filter((job: any) => job.job_id !== job_id);
            localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobs));
        } else {
            const jobDetails = {
                job_id,
                job_title,
                employer_name,
                employer_logo,
                job_min_salary,
                job_max_salary,
                job_posted_at_datetime_utc,
                job_city,
                job_state
            };
            const updatedLikedJobs = [...storedLikedJobs, jobDetails];
            localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobs));
        }

        setLiked(!liked);
    };

    return (
        <div className="flex flex-col gap-3 font-light">
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <div className='text-xl font-bold'>
                        {job_title}
                    </div>

                    <div>
                        {job_min_salary && job_max_salary
                            ? `$${job_min_salary} - $${job_max_salary}`
                            : job_min_salary ? `$${job_min_salary}`
                            : job_max_salary ? `$${job_max_salary}`
                            : ''
                        }
                    </div>

                    <div className='flex gap-6'>
                        <div>
                            {employer_name}
                        </div>

                        <div>
                            {job_city + ', ' + job_state}
                        </div>
                    </div>
                </div>

                <div>
                    {employer_logo ?
                        <img src={employer_logo} alt="" width={60} height={60} />
                        : <div className='h-[40px] w-[40px]'></div>
                    }
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <Link href={`/job-details/${job_id}`}>
                    {/* <Link href={`/job-details/`}> */}
                        <div className=' font-bold text-orange-400 hover:cursor-pointer hover:underline underline-offset-4'>
                            Details
                        </div>
                    </Link>
                    <div onClick={handleLike} className={`flex items-center text-xl hover:cursor-pointer ${liked ? 'text-red-500' : 'text-white'}`}>
                        <FaHeart />
                    </div>
                </div>
                <div>
                    {job_posted_at_datetime_utc.slice(0, 10).split("-").join('/')}
                </div>
            </div>
        </div>
    );
};

export default JobCard;
