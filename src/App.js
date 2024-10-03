import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

//My components
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Experiences from './components/Experiences/Experiences';
import Planning from './components/Planning/Planning';
import FAQ from './components/FAQ/FAQ';
import Sitemap from './components/Other/Sitemap';
import PrivacyAndMore from './components/Other/PrivacyAndMore';


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
          <Route path='/experiences' element={<Experiences />}/>
          <Route path='/planning' element={<Planning />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/sitemap' element={<Sitemap />} />
          <Route path='/privacy-and-more' element={<PrivacyAndMore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
