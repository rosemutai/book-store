import Books from "../components/Books";
import AddBook from "../components/AddBook";

const Home = () => {
  return (
    <div className="home-page w-11/12 md:w-10/12 mx-auto bg-slate-50 py-8 px-4 md:px-20 shadow-xl">
      <Books />

      <div className="form-section">
        <hr className="border-x-0 border-t-o border-b border-b-slate-200 my-12" />
        <AddBook />
      </div>
    </div>
  );
}

export default Home