import styles from './styles/App.module.scss';
import Navbar from './components/Navbar';
import { ThemeContext } from 'context/themeContext';
import { useContext } from 'react'
import classNames from 'classnames';
import Footer from 'components/Footer';
import AboutMe from 'components/Aboutme';
import WhereWorked from 'components/WhereWorked';
import Profile from 'components/Profile';
import Projects from 'components/Projects';

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <main className={classNames({
      [styles.app]: true,
      [styles[`app__${theme}`]]: true
    })}>
      <Navbar />
      <Profile />
      <AboutMe />
      <WhereWorked />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
