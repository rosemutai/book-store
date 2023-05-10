import { PropTypes } from "prop-types";
import Button from "./Button";


const Book = ({ item_id, title, author, onClick }) => {

  return (
    <div className="book">
      {/* <h4>{category}</h4> */}
      <h2>{title}</h2>
      <p>{author}</p>

      <Button
        text="Remove"
        id={item_id}
        onClick={onClick}
        classname="bg-black text-white px-3"
      />
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string,
  // category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};
export default Book