import { SignUpForm, Title } from 'components';
import { Section, Container } from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Title className="isHidden">SIGN UP PAGE</Title>
          <SignUpForm />
        </Container>
      </Section>
    </>
  );
};

export default SignUpPage;
