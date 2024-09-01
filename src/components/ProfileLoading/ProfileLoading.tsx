import React, { FormEvent, useEffect, useState } from 'react'
import { VscLoading } from 'react-icons/vsc';

interface Props{
    setStoredProfile: React.Dispatch<React.SetStateAction<never[]>>,
}

const ProfileLoading = ({setStoredProfile} : Props) => {
    useEffect(() => {
      setStoredProfile(JSON.parse(localStorage.getItem('profile') || 'null'));
    }, [])
    
  return (
    <div className=" flex items-center mx-auto w-full text-center">
      <VscLoading className=" animate-spin mx-auto text-6xl text-orange-700 m-20"/>
    </div>
  )
}

export default ProfileLoading