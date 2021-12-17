import "./App.css";
import Navbar from "./Home/components/nav";
import QuickAcess from "./Home/components/quickAccess";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
      </div>
      <Home />
      <div className="quickAccessBlock">
        <QuickAcess />
      </div>
    </div>
  );
}

export default App;
