import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserName, updateAge, updateStatus } from '../reducers';

export const Profile = () => {
  const { name, age, status } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Profile</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {status}</h3>
      <button onClick={() => dispatch(updateAge(40))}>Update Age</button>
      <button onClick={() => dispatch(fetchUserName())}>Update Name</button>
      <button onClick={() => dispatch(updateStatus('inactive'))}>
        Update Status
      </button>
    </>
  );
};
