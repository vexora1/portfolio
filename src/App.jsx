import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./App.module.css";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import MobileSidebar from "./components/sidebar/MobileSidebar";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar className={styles.sidebar} />
      <MobileSidebar />
      <div className={styles.content}>
        <Home />
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
