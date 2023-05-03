import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-full bg-slate-100 h-screen py-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
}

export default App
