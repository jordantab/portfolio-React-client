import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from './components/Header'
// import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects';
import HomePage from './pages/HomePage';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
