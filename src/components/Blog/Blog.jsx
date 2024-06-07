import "./Blog.css";
import PropTypes from "prop-types";
const Blog = ({ blogData, handleAddToBookmark, handleSumReadingTime }) => {
    const {
        cover_img,
        author,
        author_img,
        title,
        posted_date,
        reading_time,
        hashTags,
    } = blogData;
    return (
        <div className="container my-4">
            <div>
                <div className="blog-cover">
                    <img
                        src={cover_img}
                        alt="Blog_cover"
                        className="cover_img rounded object-fit-cover"
                    />
                </div>
                <div className=" my-3 authorBookmarik d-flex align-items-center justify-content-between">
                    <div className="author d-flex justify-content-between align-items-center">
                        <div className="author-img">
                            <img
                                src={author_img}
                                alt="author_img"
                                className="author_img rounded rounded-pill object-fit-cover"
                            />
                        </div>
                        <div className="autor_info ms-3">
                            <div className="user_name fw-bolder">{author}</div>
                            <div className="posted_date fw-lighter">
                                {posted_date}
                            </div>
                        </div>
                    </div>
                    <div className="bookMark">
                        <span>{reading_time}</span> min read{" "}
                        <button
                            className="border-0 p-1 rounded"
                            onClick={() => handleAddToBookmark(blogData)}
                        >
                            <i className="fa-regular fa-bookmark fa-fw"></i>
                        </button>
                    </div>
                </div>
                <h3>{title}</h3>
                <p>
                    {hashTags.map((hash, idx) => (
                        <span key={idx} className="me-3">
                            <a className="text-secondary text-decoration-none">
                                #{hash}
                            </a>
                        </span>
                    ))}
                </p>
                <p>
                    <a
                        href="#"
                        type="button"
                        onClick={() => handleSumReadingTime(reading_time)}
                    >
                        Mark as read
                    </a>
                </p>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blogData: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleSumReadingTime: PropTypes.func.isRequired,
};
export default Blog;
