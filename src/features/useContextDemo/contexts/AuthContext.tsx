/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import type { ReactNode } from "react";

// Define the shape of our Auth context
interface AuthContextType {
  isLoggedIn: boolean;
  userName: string;
  login: (name: string) => void;
  logout: () => void;
}

// Create the context with undefined as default (will be provided by provider)
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim());
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
