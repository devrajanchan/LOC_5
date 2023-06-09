import React, { useState, useEffect } from 'react';
import { fetchData } from './fetchData';
import ExampleCards from './ExampleCards';

  const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('gautammalpani33@gmail.com').then(data => setData(data));
  }, []);
  return (
    <>
      {data.map((item) => (
        <ExampleCards i={item}/>
      ))}
    </>
  );
}
export default Example
