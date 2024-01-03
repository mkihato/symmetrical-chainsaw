import "./styles/global.scss";
import "../src/components/navbar/Navbar.js";
import Navbar from "../src/components/navbar/Navbar.js";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer"></div>
        <div className="contentContainer"></div>
      </div>
    </div>
  );
}

export default App;
