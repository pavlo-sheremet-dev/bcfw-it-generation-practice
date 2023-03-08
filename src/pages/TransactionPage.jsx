import {
  Container,
  Section,
  Title,
  TransactionForm,
  TransactionFormFormik,
} from 'components';

const TransactionPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Title>React hook form</Title>
          <TransactionForm />
          <Title>Formik</Title>
          <TransactionFormFormik />
        </Container>
      </Section>
    </>
  );
};

export default TransactionPage;
