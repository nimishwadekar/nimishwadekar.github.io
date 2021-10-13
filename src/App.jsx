import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Academia from "./components/academia/Academia";
import Projects from "./components/projects/Projects";
import WorkEx from "./components/workex/WorkEx";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Academia />
        <Projects />
        <WorkEx />
        <Contact />
      </div>
    </div>
  );
}

export default App;
