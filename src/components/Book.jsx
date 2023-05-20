import { PropTypes } from "prop-types";
import Button from "./Button";

const Book = ({ item_id, title, author, onClick }) => {

  return (
    <div
      className="book bg-white my-3 p-4 border border-slate-200 
      rounded-sm flex md:flex-row flex-col justify-between w-full"
    >
      <div className="left-section">
        <h5 className="text-gray-400/80 font-bold">Action</h5>
        <h2 className=" text-black text-lg font-bold">{title}</h2>
        <p className="text-turquoise/60 font-regular">{author}</p>

        <div className="btns flex mt-2">
          <Button
            text="Comments"
            id={item_id}
            onClick={onClick}
            classname=" text-turquoise/60 border-0 pr-3"
          />

          <Button
            text="Remove"
            id={item_id}
            onClick={onClick}
            classname="text-turquoise/60 border-y-0 border-x-2 border-x-slate-300/60 px-2"
          />

          <Button
            text="Edit"
            id={item_id}
            onClick={onClick}
            classname="text-turquoise/60 border-0 px-3"
          />
        </div>
      </div>

      <div className="right-section flex md:flex-row flex-col">
        <div className="progress flex border-y-0 border-l-0 md:border-r-2 border-r-slate-300/60 pr-0 md:pr-8 my-3 md:my-0">
          <div className="progress-bar ">
            <progress value="75" min="0" max="100" className="progress-circle">
              64%
            </progress>
          </div>

          <div className="book-progress pl-6">
            <h4 className="percentage text-2xl font-normal tracking-wide text-black/80">
              64%
            </h4>
            <p className="completed-status text-gray-400/70 font-normal">
              Completed
            </p>
          </div>
        </div>

        <div className="chapter mt-2 md:mt-0 md:px-8">
          <h5 className="current-chapter-title text-xs text-gray-400/70">
            CURRENT CHAPTER
          </h5>
          <p className="chapter-value text-black/80">Chapter 17</p>
          <Button
            text="UPDATE PROGRESS"
            id={item_id}
            onClick={onClick}
            classname=" text-white bg-turquoise border-0 text-center rounded-sm text-xs py-1 my-4 px-3"
          />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};
export default Book