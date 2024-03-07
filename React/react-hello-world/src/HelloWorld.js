/**
 * 
 */
import React, { useState, useEffect } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('Hello World');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.text())
      .then(() => {
        setMessage("Hello World");
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return <h1>{message}</h1>;
}

export default HelloWorld;
