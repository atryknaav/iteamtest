'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaHeart, FaHeartCircleCheck } from 'react-icons/fa6';

const Header = () => {
    
    return (
        <div className='flex justify-between w-full left-0 top-0 sticky bg-stone-800 shadow-sm text-2xl p-3 text-stone-300'>
            <Link href={'/'}>
                Job Searcher
            </Link>
            <div className='flex items-center text-2xl gap-6'>
                <Link href={'/liked'}>
                    <FaHeartCircleCheck className=' hover:text-red-300 hover:cursor-pointer active:text-red-500'/>
                </Link>
                <Link href={'/create-profile'}>
                    <FaUserAlt className=' hover:text-green-300 hover:cursor-pointer active:text-green-500'/>
                </Link>
            </div>
        </div>
    )
};

export default Header;
