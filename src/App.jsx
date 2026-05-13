import styles from './App.module.css'
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { TechStack } from './components/TechStack/TechStack';


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
