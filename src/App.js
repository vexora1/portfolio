import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
      </main>
    </>
  );
}

export default App;
