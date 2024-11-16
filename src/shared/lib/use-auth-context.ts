import { createContext, useContext } from 'react';

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuthContext is only available within a AuthProvider`);
  }

  return context;
}

export { AuthContext, useAuthContext };
