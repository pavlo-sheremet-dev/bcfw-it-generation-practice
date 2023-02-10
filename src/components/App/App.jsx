import { Container, Section, Layout, Header } from 'components';
import { Component } from 'react';
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
        <Header switchTheme={this.switchTheme} themeTitle={themeTitle} />

        <main>
          <Section>
            <Container>
              <h1>Section title</h1>
              <p>Section subtitle</p>
              <br />
              <p>Some text</p>
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}

export { App };
