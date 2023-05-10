import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./routes/Home";
import Categories from "./routes/Categories";
import Navbar from "./components/Navbar";
import { fetchBooks } from "./redux/books/booksSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);
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

export default App;
