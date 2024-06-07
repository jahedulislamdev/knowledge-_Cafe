import { PropTypes } from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ blogTitle, timespend, removeFromBookmark }) => {
    // const { reading_time } = timespend;
    return (
        <div className="bg-light mt-4">
            <p className="fs-5 fw-semibold bg-body-tertiary p-2 mb-4 border border-primary-subtle rounded">
                Spent Time On Read : {timespend} Mins
            </p>
            <h3 className="bg-bg-body-tertiary text=-muted mb-4">
                Bookmarked Blogs : {blogTitle.length}
            </h3>
            {blogTitle.map((b, idx) => (
                <Bookmark
                    key={idx}
                    blogTitle={b}
                    removeFromBookmark={removeFromBookmark}
                ></Bookmark>
            ))}
        </div>
    );
};
Bookmarks.propTypes = {
    blogTitle: PropTypes.array,
    timespend: PropTypes.array,
    removeFromBookmark: PropTypes.func,
};
export default Bookmarks;
