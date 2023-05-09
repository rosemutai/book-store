import { PropTypes } from "prop-types";
import Button from "./Button";


const Book = ({ item_id, category, title, author, onClick }) => {

  return (
    <div className="book">
      <h4>{category}</h4>
      <h2>{title}</h2>
      <p>{author}</p>

      <Button text="Remove" id={item_id}  onClick={onClick} />
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};
export default Book