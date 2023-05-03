import { useState } from "react"

const AddBook = () => {

  const [state, setState] = useState({
    title: "",
    bookCategory: "",

  });

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  const categories = ["Science Fiction", "Economy"]
  const categoryOptions = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ))
  return (
    <div className="add-book-form">
      <h3 className="form-title">AddBook</h3>
      <form className="form">
        <input
          type="text"
          id="title-input"
          placeholder="Book title"
          value={state.title}
          onChange={handleChange}
          className="border border-slate-200"
        />
        <select
          name="book-categories"
          value={state.bookCategory}
          onChange={handleChange}
          className="border border-slate-200 ml-5"
        >
          <option value={""} disabled>
            Category
          </option>
          {categoryOptions}
        </select>

        <button type="submit" className="bg-turquoise text-white">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook