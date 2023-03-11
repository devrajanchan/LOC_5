import React, { useState, useEffect } from 'react';
import { fetchData } from './fetchData';
import ExampleCards from './ExampleCards';

export default function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('user@example.com').then(data => setData(data));
  }, []);

  return (
    <>
      {data.map((item) => (
        <ExampleCards i={item}/>
      ))}
    </>
  );
}
