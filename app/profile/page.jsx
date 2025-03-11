"use client"; 
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const ProfilePage = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Profile</h1>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            name="firstName" 
            value={profileData.firstName} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="lastName" 
            value={profileData.lastName} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            value={profileData.email} 
            onChange={handleChange} 
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {profileData.firstName} {profileData.lastName}</p>
          <p>Email: {profileData.email}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
