import React, { useContext, useState } from 'react';
import { PasswordContext } from './PasswordContext';

const PasswordGenerator = () => {
  const { password, generatePassword } = useContext(PasswordContext);
  const [length, setLength] = useState(10);

  const handleGenerate = () => {
    generatePassword(length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <label>
        Password Length:
        <input
          type="number"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value) || 12)}
          style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
        />
      </label>
      <br />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Generate Password
      </button>
      <div
        style={{
          marginTop: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
          wordBreak: 'break-word',
        }}
      >
        {password ? `Generated Password: ${password}` : 'Click to generate a password'}
      </div>
    </div>
  );
};

export default PasswordGenerator;
