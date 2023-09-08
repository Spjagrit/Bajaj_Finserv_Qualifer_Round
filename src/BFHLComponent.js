import React, { useState } from 'react';

function BFHLComponent() {
  const [getResponse, setGetResponse] = useState('');
  const [postResponse, setPostResponse] = useState('');
  const [requestData, setRequestData] = useState({ data: [] });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const makeGetRequest = () => {
    fetch('/bfhl', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setGetResponse(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('GET Error:', error);
      });
  };

  const makePostRequest = () => {
    fetch('/bfhl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostResponse(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('POST Error:', error);
      });
  };

  return (
    <div>
      <h1>General Frontend</h1>
      <button onClick={makeGetRequest}>Make GET Request</button>
      <div>
        <h2>GET Response:</h2>
        <pre>{getResponse}</pre>
      </div>
      <div>
        <h2>POST Request:</h2>
        <input
          type="text"
          name="data"
          placeholder="Enter data (e.g., M, 1, 334, 4, B)"
          value={requestData.data}
          onChange={handleInputChange}
        />
        <button onClick={makePostRequest}>Make POST Request</button>
        <h2>POST Response:</h2>
        <pre>{postResponse}</pre>
      </div>
    </div>
  );
}

export default BFHLComponent;
