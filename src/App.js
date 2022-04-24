import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Home/Footer/Footer";
import Home from "./component/Home/Home/Home";
import Navigation from "./component/Home/Navigation/Navigation";
import Project1 from "./component/Projects/Project1/Project1";
import Project2 from "./component/Projects/Project2/Project2";
import Project3 from "./component/Projects/Project3/Project3";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/project1" element={<Project1 />}></Route>
        </Routes>
        <Routes>
          <Route path="/project2" element={<Project2 />}></Route>
        </Routes>
        <Routes>
          <Route path="/project3" element={<Project3 />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
