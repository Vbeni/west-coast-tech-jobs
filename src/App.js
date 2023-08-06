import Home from './components/Home';
import JobMap from './components/JobMap';
import './App.css';
import TechBreakdown from './components/TechBreakdown';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SalaryTrends from './components/SalaryTrends';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<JobMap />} />
          <Route path="/techbreakdown" element={<TechBreakdown />} />
          <Route path="/salarytrends" element={<SalaryTrends />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
