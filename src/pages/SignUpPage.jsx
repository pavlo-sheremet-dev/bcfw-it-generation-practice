import { Button, Container, Section, Title } from 'components';

const SignUpPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <>
      <Section>
        <Container>
          <Title>SIGN UP PAGE</Title>
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block' }} htmlFor="input-name">
              Name
            </label>
            <input type="text" id="input-name" placeholder="enter your name" />
            {false && <div>error name</div>}
            <br />
            <br />
            <label style={{ display: 'block' }} htmlFor="input-email">
              Email
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="enter your email"
            />
            {false && <div>error email</div>}
            <br />
            <br />
            <label style={{ display: 'block' }} htmlFor="input-password">
              Password
            </label>
            <input
              type="text"
              id="input-password"
              placeholder="enter your password"
            />
            {false && <div>error password</div>}
            <br />
            <br />
            <Button label={'Sign Up'} type={'submit'} />
          </form>
        </Container>
      </Section>
    </>
  );
};

export default SignUpPage;
