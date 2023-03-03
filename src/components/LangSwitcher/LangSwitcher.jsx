import { useTranslation } from 'react-i18next';
import { langs } from 'services/i18next';
import { Box, Separator, Button } from './LangSwitcher.styled';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = lng => () => i18n.changeLanguage(lng);

  const buttonsProps = {
    changeLang,
    currentLang: i18n.language,
  };

  return (
    <Box>
      <LangButton lang={langs.UK} {...buttonsProps} />
      <Separator />
      <LangButton lang={langs.EN} {...buttonsProps} />
    </Box>
  );
};

const LangButton = ({ lang = langs.UK, changeLang, currentLang }) => {
  return (
    <Button
      type="button"
      onClick={changeLang(lang)}
      isActive={currentLang === lang}
    >
      {lang}
    </Button>
  );
};

export default LangSwitcher;
