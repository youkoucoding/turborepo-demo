import * as React from 'react';
import { auth, onAuthStateChanged, signInWithGoogle } from '../auth';

export type authContextType = {
  userId: string | null;
  login: () => Promise<void>;
  userEmail: string | null;
};

const AuthContext = React.createContext<authContextType | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = React.useState<string | null>(null);
  const [userEmail, setUserEmail] = React.useState<string | null>(null);
  const [loadingUser, setLoadingUser] = React.useState(true);

  const login = async () => {
    try {
      const { user } = await signInWithGoogle();
      user && setUserId(user.uid);
      user && setUserEmail(user.email);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUserId(user.uid);
        setUserEmail(user.email);
      } else {
        setUserId(null);
        setUserEmail(null);
      }
      setLoadingUser(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ userId, userEmail, login }}>
      {loadingUser ? '' : children}
    </AuthContext.Provider>
  );
};
