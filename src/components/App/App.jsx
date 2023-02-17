import { Component } from 'react';
import {
  Container,
  Section,
  Layout,
  Header,
  Wrapper,
  SideBar,
  Footer,
} from 'components';
import { colors } from 'styles/colors';

import { theme } from 'styles';

class App extends Component {
  state = { themeTitle: 'light' };

  switchTheme = () => {
    this.setState(({ themeTitle }) => ({
      themeTitle: themeTitle === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { themeTitle } = this.state;
    const normalizedTheme = { ...theme, ...colors[themeTitle] };

    return (
      <Layout theme={normalizedTheme}>
        <Wrapper>
          <Header switchTheme={this.switchTheme} themeTitle={themeTitle} />
          <SideBar />
          <main style={{ gridArea: 'main' }}>
            <Section>
              <Container>
                <h1>Section title</h1>
                <p>Section subtitle</p>
                <br />
                <p>Some text</p>
              </Container>
            </Section>
          </main>
          <Footer />
        </Wrapper>
      </Layout>
    );
  }
}

export { App };
