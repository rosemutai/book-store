import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';

function App() {
  return (
    <div className="h">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
}

export default App
