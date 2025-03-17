// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions';

const Profile = () => {
  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(userInfo.name || '');

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ name }));
  };

  useEffect(() => {
    setName(userInfo.name);
  }, [userInfo]);

  return (
    <div>
      <h1>User Profile</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;