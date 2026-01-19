import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLanguage } from "../hooks/useLanguage";

function AuthSection() {
  const { isLoggedIn, userName, login, logout } = useAuth();
  const { t } = useLanguage();
  const [inputName, setInputName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(inputName);
    setInputName("");
  };

  return (
    <div className="auth-section">
      <h2>{t.authTitle}</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder={t.usernamePlaceholder}
            className="auth-input"
          />
          <button type="submit" className="auth-button login-btn">
            {t.loginButton}
          </button>
        </form>
      ) : (
        <div className="logged-in-section">
          <p className="welcome-message">
            {t.welcomeMessage} <strong>{userName}</strong>!
          </p>
          <button onClick={logout} className="auth-button logout-btn">
            {t.logoutButton}
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthSection;
