'use client'

import DisplayProfile from "@/components/DisplayProfile";
import Header from "@/components/Header";
import StoredProfile from "@/components/ProfileForm";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [storedProfile, setStoredProfile] = useState<any>(null);
  
  return (
    <div className="h-screen w-full bg-stone-900">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-lg p-8 bg-stone-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {storedProfile ? 'Your profile' : 'Create profile'}
          </h2>
          {!storedProfile ?
          <StoredProfile setStoredProfile={setStoredProfile} storedProfile={storedProfile} />
          : 
          <DisplayProfile setStoredProfile={setStoredProfile} storedProfile={storedProfile}/>
          }
        </div>
      </div>
    </div>
  );
}
