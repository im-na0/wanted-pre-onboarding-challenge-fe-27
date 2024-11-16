import { AuthContext, LOCAL_STORAGE_KEYS } from '@/shared';
import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)),
  );

  const login = useCallback((accessToken: string) => {
    setIsLoggedIn(true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  }, []);

  const context = useMemo(
    () => ({ isLoggedIn, login, logout }),
    [isLoggedIn, login, logout],
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

AuthContext.displayName = 'AuthContext';

export { AuthProvider };
