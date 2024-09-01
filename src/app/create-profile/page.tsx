'use client'

import DisplayProfile from "@/components/DisplayProfile";
import Header from "@/components/Header";
import StoredProfile from "@/components/ProfileForm";
import ProfileLoading from "@/components/ProfileLoading";
import { FormEvent, useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

export default function Home() {
  const [storedProfile, setStoredProfile] = useState<any>('loading');
  
  return (
    <div className="h-screen w-full bg-stone-900">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-lg p-8 bg-stone-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {storedProfile === 'loading' ? '' : storedProfile ? 'Your profile' :  'Create profile'}
          </h2>
          {storedProfile === 'loading' ? 
          <ProfileLoading setStoredProfile={setStoredProfile}/>
          :
          !storedProfile ?
          <StoredProfile setStoredProfile={setStoredProfile} storedProfile={storedProfile} />
          : 
          <DisplayProfile setStoredProfile={setStoredProfile} storedProfile={storedProfile}/>
          }
        </div>
      </div>
    </div>
  );
}
