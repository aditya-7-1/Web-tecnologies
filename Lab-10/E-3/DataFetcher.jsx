import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Aditya is loading data...</p>;
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}><strong>{item.title}</strong></li>
      ))}
    </ul>
  );
};

export default DataFetcher;