import Home from './components/Home';
import JobMap from './components/JobMap';
import './App.css';
import TechBreakdown from './components/TechBreakdown';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <JobMap />
      <TechBreakdown />
    </div>
  );
}

export default App;
