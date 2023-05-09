import { PropTypes } from "prop-types";

const Button = ({ id, text, onClick, classname }) => {
  return (
    <button
      id={id}
      type="button"
      className={classname}
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
  classname: PropTypes.string,
};
export default Button;
