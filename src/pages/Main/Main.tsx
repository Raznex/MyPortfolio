import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Achievements from '../../components/Achievements/Achievements';
import Projects from '../../components/Projects/Projects';
import './Main.css';
const Main = () => {
  return (
    <main className='main'>
      <Tabs
        defaultActiveKey='projects'
        id='uncontrolled-tab-example'
        style={{ border: 'none' }}
      >
        <Tab
          eventKey='projects'
          title='Projects'
          className='main__title'
          style={{ border: 'none' }}
        >
          <Projects />
        </Tab>
        <Tab
          eventKey='achievements'
          title='Achievements'
          className='main__title'
          style={{ border: 'none' }}
        >
          <Achievements />
        </Tab>
      </Tabs>
    </main>
  );
};

export default Main;
