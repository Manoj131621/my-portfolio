import './assets/App.css';
import Header from './components/Header';
// import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>Hi, I'm Manojkumar. I'm a web developer with experience in React and Java.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
