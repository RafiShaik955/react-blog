// import logo from './logo.svg';
// import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import About from './components/About';
import Categories from './components/Categories';

function App() {
  return (
    <div>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/Categories" element={<Categories/>}/>
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;
