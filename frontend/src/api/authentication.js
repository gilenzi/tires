import {setUser} from '../state/user/user-slice';
import api from './axios';
import {jwtDecode} from 'jwt-decode';
// import {setupAxiosInterceptors} from './axiosInterceptors';
import {store} from '../state/store'; // needed to dispatch
import {resetUser} from '../state/user/user-slice';
import {useSelector} from 'react-redux';

export async function login(username, password) {
  try {
    const response = await api.post(`/api/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw (
      error.response?.data?.message || {message: 'An unexpected error occurred'}
    );
  }
}

export async function logout({token}) {
  try {
    const response = await api.post(`/api/auth/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error.response?.data?.message || {message: 'An unexpected error occurred'}
    );
  } finally {
    store.dispatch(resetUser());
  }
}
