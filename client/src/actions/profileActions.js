import { createAction } from '@reduxjs/toolkit';
import { profileActionTypes } from '../constants';

export const updateProfileStatus = createAction(
  profileActionTypes.UPDATE_STATUS
);
export const updateProfileAge = createAction(profileActionTypes.UPDATE_AGE);
export const updateProfileName = createAction(profileActionTypes.UPDATE_NAME);
export const fetchName = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const data = await response.json();
    dispatch(updateProfileName(data.name));
  };
};
