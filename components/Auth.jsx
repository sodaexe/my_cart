'use client';
import {useState, createContext} from 'react';

const AuthContext = createContext();

function AuthProvider({children}) {
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{username, setUsername, isAuthenticated, setIsAuthenticated}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider, AuthContext};

export function useAuth() {
  return useContext(AuthContext);
}
