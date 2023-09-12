import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (id, time) => {
    setReadTime(readTime + time);
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmarks);
  }

  const handleBookmark = (blog) => {
    // saveToLS(id, "cart");
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <div className="max-w-screen-xl mx-2 lg:mx-auto">
      <Header></Header>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 my-8">
        <Blogs handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App;