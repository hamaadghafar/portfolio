import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Stats } from './components/Stats/Stats';
import { Projects } from './components/Projects/Projects';
import { Services } from './components/Services/Services';
import { Architecture } from './components/Architecture/Architecture';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const AppContent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Architecture />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

const App = () => (
  <ThemeContextProvider>
    <AppContent />
  </ThemeContextProvider>
);

export default App;
