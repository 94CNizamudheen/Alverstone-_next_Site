import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

/**
 * Custom hook for fetching and managing API data.
 * @param {string} endpoint - The API endpoint (e.g., 'appointments', 'doctors').
 * @returns {{ data: any[], fetchData: () => void, loading: boolean, error: string }}
 */
const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || `Error fetching ${endpoint}`);
    } finally {
      setLoading(false);
    }
  }, [endpoint, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, fetchData, loading, error };
};

export default useApi;