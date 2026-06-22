import { createContext, useState } from 'react';

export const AuthContext = createContext();

const getStoredUser = () => {
  try {
    const stored = localStorage.getItem('user');
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.warn('Invalid user data in localStorage, removing user item.');
    localStorage.removeItem('user');
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;