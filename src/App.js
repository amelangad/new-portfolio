import './App.css';
import Header from './pages/Header'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  return (
    <main className="App">
      <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </main>
  );
}

export default App;
