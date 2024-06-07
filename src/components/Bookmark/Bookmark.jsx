import { PropTypes } from "prop-types";
import "./Bookmark.css";
const Bookmark = ({ blogTitle, removeFromBookmark }) => {
    const { title } = blogTitle;
    return (
        <div className="bookmark border rounded p-2 bg-light d-flex justify-content-between align-items-center">
            <p className="fs-5 mb-0">{title}</p>
            <button
                onClick={() => removeFromBookmark(blogTitle)}
                className="btn btn-close bg-body fs-6"
            ></button>
        </div>
    );
};
Bookmark.propTypes = {
    blogTitle: PropTypes.object,
    removeFromBookmark: PropTypes.func,
};
export default Bookmark;
