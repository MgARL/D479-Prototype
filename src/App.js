import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

//My components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation Link={Link}/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
