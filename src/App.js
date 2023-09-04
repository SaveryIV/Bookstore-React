import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
