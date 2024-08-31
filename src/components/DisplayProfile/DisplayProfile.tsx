import React, { useEffect, useState } from 'react';
import ProfileForm from '../ProfileForm';

interface Props{
    storedProfile: never[],
    setStoredProfile: React.Dispatch<React.SetStateAction<never[]>>
}

const DisplayProfile = (props: Props) => {
    const [edit, setEdit] = useState(false);
    const {storedProfile, setStoredProfile} = props
    const [name, setName] = useState('');
    const [desiredJob, setDesiredJob] = useState('');
    const [about, setAbout] = useState('');
    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profile') || 'null');
        if (profileData) {
            setStoredProfile(profileData);
            setName(profileData.name);
            setDesiredJob(profileData.desiredJob);
            setAbout(profileData.about);
        }
    }, [setStoredProfile])

    return (
        <div className="bg-stone-800 p-6 rounded-lg shadow-lg text-white">
            {!edit ?
                <div className="space-y-4">
                    <div>
                        <strong className="text-gray-300">Name:</strong>
                        <p className="text-gray-100">{name}</p>
                    </div>
                    <div>
                        <strong className="text-gray-300">Desired Job Title:</strong>
                        <p className="text-gray-100">{desiredJob}</p>
                    </div>
                    <div>
                        <strong className="text-gray-300">About Me:</strong>
                        <p className="text-gray-100">{about}</p>
                    </div>
                    <button 
                        onClick={() => setEdit(!edit)}
                        type="submit" 
                        className="w-full px-4 py-2 bg-orange-700 text-white font-medium rounded-md shadow-sm hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Edit Profile
                    </button>
                </div>
            :
            <ProfileForm setStoredProfile={setStoredProfile} storedProfile={storedProfile} edit/>
            
            }
        </div>
    );
};


export default DisplayProfile;
