import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import type { Language } from "../contexts/LanguageContext";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu} aria-label="Menu">
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {isOpen && (
        <>
          <div className="menu-overlay" onClick={toggleMenu}></div>
          <div className="side-menu">
            <div className="menu-header">
              <button className="close-btn" onClick={toggleMenu}>
                ✕
              </button>
            </div>

            <div className="menu-content">
              {/* Theme Toggle */}
              <div className="menu-section">
                <h3>{t.menuTheme}</h3>
                <div className="theme-toggle-container">
                  <span className="theme-label">{t.lightMode}</span>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                  <span className="theme-label">{t.darkMode}</span>
                </div>
              </div>

              {/* Language Switch */}
              <div className="menu-section">
                <h3>{t.menuLanguage}</h3>
                <div className="language-buttons">
                  <button
                    className={`lang-btn ${language === "en" ? "active" : ""}`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                  <button
                    className={`lang-btn ${language === "vi" ? "active" : ""}`}
                    onClick={() => handleLanguageChange("vi")}
                  >
                    Tiếng Việt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;
