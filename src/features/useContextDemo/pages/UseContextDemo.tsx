import { AuthProvider } from "../contexts/AuthContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import HamburgerMenu from "../components/HamburgerMenu";
import AuthSection from "../components/AuthSection";
import EducationalContent from "../components/EducationalContent";
import "./UseContextDemo.css";

// Inner component that has access to all contexts
function UseContextDemoContent() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={`use-context-demo ${theme}`}>
      <div className="demo-header">
        <HamburgerMenu />
        <div className="header-title">
          <h1>{t.pageTitle}</h1>
          <p className="subtitle">{t.pageSubtitle}</p>
        </div>
      </div>

      <div className="demo-container">
        <AuthSection />
        <EducationalContent />
      </div>
    </div>
  );
}

// Main component that provides all contexts
function UseContextDemo() {
  console.log("UseContextDemo rendering...");
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <UseContextDemoContent />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default UseContextDemo;
