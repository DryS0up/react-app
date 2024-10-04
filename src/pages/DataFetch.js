import { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 6)); 
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Data Fetcher</h1>
      <p>
        This dummy data is being fetched from{' '}
        <a href='https://jsonplaceholder.typicode.com/posts'>JSON Placeholder</a>
      </p>
      {loading ? (
        <div>
            <p>Loading...</p>
            <div className='loader' />
        </div>
      ) : (
        data.map(item => (
          <div className='card' key={item.id} >
            <h3 style={{ fontSize: '18px', color: 'black' }}>{item.title}</h3>
            <p style={{ fontSize: '14px', color: 'black' }}>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DataFetcher;
