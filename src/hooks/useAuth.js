import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const session = localStorage.getItem('mugixor-admin-session');
      if (session) {
        const sessionData = JSON.parse(session);
        const now = Date.now();
        
        if (sessionData.expiresAt > now) {
          setIsAuthenticated(true);
          setUser({
            username: sessionData.username,
            loginTime: sessionData.loginTime
          });
        } else {
          // Session expired
          localStorage.removeItem('mugixor-admin-session');
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
      setUser(null);
    }
    
    setIsLoading(false);
  };

  const login = (success) => {
    if (success) {
      checkAuthStatus();
    }
  };

  const logout = () => {
    localStorage.removeItem('mugixor-admin-session');
    setIsAuthenticated(false);
    setUser(null);
  };

  const extendSession = () => {
    try {
      const session = localStorage.getItem('mugixor-admin-session');
      if (session) {
        const sessionData = JSON.parse(session);
        sessionData.expiresAt = Date.now() + (24 * 60 * 60 * 1000); // Extend by 24 hours
        localStorage.setItem('mugixor-admin-session', JSON.stringify(sessionData));
      }
    } catch (error) {
      console.error('Error extending session:', error);
    }
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
    extendSession,
    checkAuthStatus
  };
};

