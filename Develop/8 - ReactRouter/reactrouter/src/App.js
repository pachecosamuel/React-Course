import './App.css';

// 1 -> Config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import SearchForm from "./components/SearchForm";

// Page importation
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// Components 

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 -> Search params */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 -> Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 -> Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - Search params */}
          <Route path='/search' element={<Search />} />
          {/* 10 -> Redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 -> Not found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
