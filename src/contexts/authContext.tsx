import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface User {
  id: string;
  email: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      // Optional: You can fetch user data here to set the user state.
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        'https://strayhome-server.onrender.com/auth/login', // Certifique-se de que esta URL está correta
        {
          email,
          password
        }
      );
      const { accessToken, loggedUser } = response.data.data;

      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

      setUser(loggedUser);
      router.push('/home'); // Redireciona para a página principal após o login
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.Authorization;
    setUser(null);
    router.push('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
