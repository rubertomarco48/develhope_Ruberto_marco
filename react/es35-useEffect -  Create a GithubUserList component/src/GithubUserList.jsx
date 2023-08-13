
import React, { useState } from 'react';
import {GithubUser} from './GithubUser'; // Assicurati di avere il percorso corretto al tuo componente GithubUser

const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddUser = () => {
    if (inputValue) {
      setUsernames([...usernames, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Github User List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a GitHub username"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
};

export default GithubUserList;