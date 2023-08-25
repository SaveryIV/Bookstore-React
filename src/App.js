/* eslint-disable import/no-extraneous-dependencies */
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BookCollection from './components/BookCollection';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/categories" element={<BookCollection />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
