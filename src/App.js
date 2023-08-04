import Home from './components/Home';
import JobMap from './components/JobMap';
import './App.css';
import TechBreakdown from './components/TechBreakdown';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <JobMap />
      <TechBreakdown />
      <Footer />
    </div>
  );
}

export default App;
