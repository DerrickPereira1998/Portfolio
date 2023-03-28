import styles from './styles/App.module.scss'
import Navbar from './components/Navbar';
import Presentation from 'components/Presentation';
import { ThemeContext } from 'context/themeContext';
import { useContext } from 'react'
import classNames from 'classnames';
import Footer from 'components/Footer';
import AboutMe from 'components/Aboutme';
import WhereWorked from 'components/WhereWorked';

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <main className={classNames({
      [styles.app]: true,
      [styles[`app__${theme}`]]: true
    })}>
      <Navbar/>
      <AboutMe/>
      <WhereWorked/>
      <Presentation/>
      <Footer/>
    </main>
  );
}

export default App;
