
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const GithubUserList = () => {
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
        {usernames.map(nick=> <><Link to={`/${nick}`}>{nick}</Link><hr/></>)}
      </div>
      <hr/>
      <Link to="/">HOME</Link>
      <hr/>
      <Link to="/counter">Counter</Link>
    </div>
  );
};

