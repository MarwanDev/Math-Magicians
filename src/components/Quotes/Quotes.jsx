import React, { useEffect, useState } from 'react';
import './Quotes.scss';

function Quotes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=humor',
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': 'nLcgxTEtM4yr8oNHItMy/A==eDnh2pB2EhPa7WP4',
            },
          },
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setLoading, setError, setData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data!</div>;
  return (
    <div>
      {data.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div key={item.id} className="quote-container">
          <p className="quote">
            <q>
              {item.quote}
            </q>
          </p>
          <h1 className="quote-author">
            -
            {item.author}
            -
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
