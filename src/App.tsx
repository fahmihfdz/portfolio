import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubActivity from './components/GithubActivity';

export default function App() {
  return (
    <div className="bg-bg text-text font-mono min-h-screen">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <GithubActivity />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
