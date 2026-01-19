import { useLanguage } from "../hooks/useLanguage";

function EducationalContent() {
  const { t } = useLanguage();

  return (
    <div className="educational-content">
      <h1 className="content-main-title">{t.contentTitle}</h1>

      {/* What is useContext */}
      <section className="content-section">
        <h2 className="section-title">📚 {t.whatIsTitle}</h2>
        <p className="section-text">{t.whatIsContent}</p>
      </section>

      {/* Why useful */}
      <section className="content-section">
        <h2 className="section-title">💡 {t.whyUsefulTitle}</h2>
        <p className="section-text">{t.whyUsefulContent}</p>
      </section>

      {/* When to use */}
      <section className="content-section">
        <h2 className="section-title">⏰ {t.whenToUseTitle}</h2>
        <p className="section-text">{t.whenToUseContent}</p>
      </section>

      {/* Use cases */}
      <section className="content-section">
        <h2 className="section-title">🎯 {t.useCasesTitle}</h2>
        <div className="use-cases-grid">
          <div className="use-case-card">
            <h3>🎨 {t.useCaseTheme}</h3>
            <p>{t.useCaseThemeDesc}</p>
          </div>
          <div className="use-case-card">
            <h3>🌍 {t.useCaseLanguage}</h3>
            <p>{t.useCaseLanguageDesc}</p>
          </div>
          <div className="use-case-card">
            <h3>🔐 {t.useCaseAuth}</h3>
            <p>{t.useCaseAuthDesc}</p>
          </div>
          <div className="use-case-card">
            <h3>⚙️ {t.useCaseSettings}</h3>
            <p>{t.useCaseSettingsDesc}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="content-section">
        <h2 className="section-title">✨ {t.benefitsTitle}</h2>
        <ul className="benefits-list">
          <li>{t.benefit1}</li>
          <li>{t.benefit2}</li>
          <li>{t.benefit3}</li>
          <li>{t.benefit4}</li>
        </ul>
      </section>
    </div>
  );
}

export default EducationalContent;
