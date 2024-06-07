import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from "prop-types";

const Blogs = ({ handleAddToBookmark, handleSumReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("resourses.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    // console.log(typeof handleAddToBookmark);

    return (
        <div>
            {blogs.map((b) => (
                <Blog
                    key={b.id}
                    blogData={b}
                    handleAddToBookmark={handleAddToBookmark}
                    handleSumReadingTime={handleSumReadingTime}
                ></Blog>
            ))}
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleSumReadingTime: PropTypes.func.isRequired,
};
export default Blogs;
