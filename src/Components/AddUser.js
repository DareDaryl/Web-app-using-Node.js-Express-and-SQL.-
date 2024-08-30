import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users', { name, email })
      .then(response => {
        alert('User added successfully!');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
