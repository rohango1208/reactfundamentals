import React, { createContext, useState } from 'react';

// Create Context
export const PasswordContext = createContext();

// Provider Component
export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState('');

//   Function to generate a random password
  const generatePassword = (length = 12) => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <PasswordContext.Provider value={{ password, generatePassword }}>
      {children}
    </PasswordContext.Provider>
  );
};
