import { Container, Section, Text, Title } from 'components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <Container>
          <Title>{t('homePage.title')}</Title>
          <Text>{t('homePage.description')}</Text>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
