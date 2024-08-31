import React, { FormEvent, useEffect, useState } from 'react'

interface Props{
    storedProfile: never[],
    setStoredProfile: React.Dispatch<React.SetStateAction<never[]>>,
    edit?: boolean
}

const ProfileForm = ({storedProfile, setStoredProfile, edit} : Props) => {
    const [name, setName] = useState('');
    const [desiredJob, setDesiredJob] = useState('');
    const [about, setAbout] = useState('');
  
    useEffect(() => {
      setStoredProfile(JSON.parse(localStorage.getItem('profile') || 'null'));
    }, [])
    
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      localStorage.setItem('profile', JSON.stringify({
        name: name,
        desiredJob: desiredJob,
        about: about
      }))
      setStoredProfile(JSON.parse(localStorage.getItem('profile') || 'null'));
    }
  return (
    <div><form className="space-y-6">
    <div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="mt-1 block w-full px-4 py-2 bg-stone-900 text-white border border-stone-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
    placeholder="Your Name"
    required 
  />
</div>


<div>
  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300">Desired Job Title</label>
  <input 
    type="text" 
    id="jobTitle" 
    name="jobTitle" 
    value={desiredJob}
    onChange={(e) => setDesiredJob(e.target.value)}
    className="mt-1 block w-full px-4 py-2 bg-stone-900 text-white border border-stone-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
    placeholder="Job Title" 
    required 
  />
</div>


<div>
  <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-300">About Me</label>
  <textarea 
    id="aboutMe" 
    name="aboutMe" 
    value={about}
    onChange={(e) => setAbout(e.target.value)}
    rows={4} 
    className="mt-1 block w-full px-4 py-2 bg-stone-900 text-white border border-stone-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" 
    placeholder="Tell us a little about yourself" 
    required
  ></textarea>
</div>

       <div>
  <button 
    onClick={(e) => handleSubmit(e)}
    type="submit" 
    className="w-full px-4 py-2 bg-orange-700 text-white font-medium rounded-md shadow-sm hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
  >
    {edit? 'Edit Profile' : 'Create Profile'}
  </button>
</div>
</form></div>
  )
}

export default ProfileForm