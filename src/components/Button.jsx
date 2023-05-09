import { PropTypes } from "prop-types";

const Button = ({ id, text, onClick }) => {
  return (
    <button
      id={id}
      type="button"
      className="bg-black text-white"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Button;
