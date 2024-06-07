import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
const App = () => {
    const [bookMark, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmark = (blog) => {
        const newBookmark = [...bookMark, blog];
        setBookmark(newBookmark);
    };
    const handleSumReadingTime = (time) => {
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
        // console.log("mark as read", time);
    };
    // remove from bookmark
    const removeFromBookmark = (idx) => {
        const remaining = bookMark.filter((b) => b !== idx);
        setBookmark(remaining);
    };
    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-8">
                    <Blogs
                        handleAddToBookmark={handleAddToBookmark}
                        handleSumReadingTime={handleSumReadingTime}
                    ></Blogs>
                </div>
                <div className="col-4">
                    <Bookmarks
                        blogTitle={bookMark}
                        timespend={readingTime}
                        removeFromBookmark={removeFromBookmark}
                    ></Bookmarks>
                </div>
            </div>
        </div>
    );
};

export default App;
