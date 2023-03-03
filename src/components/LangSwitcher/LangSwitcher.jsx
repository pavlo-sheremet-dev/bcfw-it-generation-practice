import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const onClick = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
      }}
    >
      <button
        type="button"
        style={{ color: i18n.language === 'uk' ? 'green' : 'inherit' }}
        onClick={() => onClick('uk')}
      >
        UK
      </button>
      |
      <button
        style={{ color: i18n.language === 'en' ? 'green' : 'inherit' }}
        type="button"
        onClick={() => onClick('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitcher;
