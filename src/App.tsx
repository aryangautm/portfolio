import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogsPage } from './pages/BlogsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
