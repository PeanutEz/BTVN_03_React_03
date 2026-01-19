/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "../translations";
import type { Translations } from "../translations";

// Define language type
export type Language = "en" | "vi";

// Define the shape of our Language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  // Get current translations based on selected language
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
