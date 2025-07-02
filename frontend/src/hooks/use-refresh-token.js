import api from '../api/axios';

export const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const response = await api.post('/api/auth/refresh', null, {
        withCredentials: true,
      });

      const {accessToken} = response.data;
      return accessToken;
    } catch (error) {
      // console.error('Failed to refresh token:', error);
      return null; // or: throw error;
    }
  };

  return refresh;
};
