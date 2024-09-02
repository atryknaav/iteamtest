'use client';

import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaRegClock, FaBuilding, FaGlobe, FaBriefcase } from 'react-icons/fa';
import { jobData } from '../../jobs/data';
import useSWR from 'swr';
import { fetcher } from '@/hooks/useJobDetails';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

type JobData = {
    employer_name: string;
    employer_logo: string | null;
    job_id: string;
    job_title: string;
    job_min_salary: number;
    job_max_salary: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    employer_website: string;
    employer_company_type: string;
    job_employment_type: string;
    job_apply_link: string;
    job_description: string;
    job_country: string;
    job_benefits: string;
    job_required_experience: string;
    job_required_skills: string;
    job_required_education: string;
    job_salary_currency: string;
    job_salary_period: string;
    job_is_remote: boolean;
    job_offer_expiration_datetime_utc: string;
}

interface Props {
    params: {
        id: string;
    };
}

const Home = ({ params }: { params: { id: string }}) => {
    const {id} = params
  const decodedId = decodeURIComponent(id);

  const { data, error, isLoading } = useSWR(decodedId, fetcher);

  if (error) return <div className='text-white'>{error.message}</div>
  if (isLoading || !data) return <div className=' text-white'>Loading</div>;


  const {
      job_title,
      employer_logo,
      employer_name,
      employer_website,
      employer_company_type,
      job_employment_type,
      job_apply_link,
      job_description,
      job_city,
      job_state,
      job_country,
      job_min_salary,
      job_max_salary,
      job_benefits,
      job_required_experience,
      job_required_skills,
      job_required_education,
      job_salary_currency,
      job_salary_period,
      job_is_remote,
      job_posted_at_datetime_utc,
      job_offer_expiration_datetime_utc
  } = data;
  
    if (error) return <div>Error: {error.message}</div>;
    

    return (
        <div className='flex flex-col'>
            <Header />
            <div className=" m-3 max-w-3xl mx-auto p-6 bg-stone-800 shadow-md rounded-lg text-white">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        {employer_logo ? (
                            <img src={employer_logo} alt={`${employer_name} logo`} className="h-20 w-20" />
                        ) : (
                            <div className="h-20 w-20 bg-stone-800 rounded-full"></div>
                        )}
                        <div>
                            <h2 className="text-3xl font-bold">{job_title}</h2>
                            <p className="text-gray-200">{employer_name}</p>
                            <p className="text-gray-100 text-sm">{employer_company_type}</p>
                        </div>
                    </div>
                    <div className="text-right text-gray-100">
                        <p>Posted on {new Date(job_posted_at_datetime_utc).toLocaleDateString()}</p>
                        <p>Expires on {new Date(job_offer_expiration_datetime_utc).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Job Details</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gray-100" />
                            <span className="text-gray-400">{job_city}, {job_state}, {job_country}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaDollarSign className="text-gray-100" />
                            <span className="text-gray-400">
                                {job_min_salary && job_max_salary
                                    ? `${job_min_salary} - ${job_max_salary} ${job_salary_period? ` per ${job_salary_period}` : ''}`
                                    : 'Salary not provided'}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaBriefcase className="text-gray-100" />
                            <span className="text-gray-400">{job_employment_type}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaRegClock className="text-gray-100" />
                            <span className="text-gray-400">{job_is_remote ? 'Remote' : 'On-site'}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                    <p className="text-gray-400">{job_description}</p>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <a href={employer_website} target="_blank" className="text-blue-200 hover:underline">
                        <FaGlobe className="inline mr-1" /> Visit Company Website
                    </a>
                    <a href={job_apply_link} target="_blank" className="bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-800 transition-all">
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
