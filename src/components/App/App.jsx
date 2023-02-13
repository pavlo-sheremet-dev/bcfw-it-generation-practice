import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from 'components';
import { Gallery, Todos } from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Gallery</Text>
              </Tab>
              <Tab>
                <Text>Todos</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>
            <TabPanel>
              <Todos />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
