import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

export default function Blogs({ handleReadTime, handleBookmark }) {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  return (
    <div className="md:w-2/3">
      {
        blogs.map(blog => <Blog key={blog.id} blog={blog} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blog>)
      }
    </div>
  )
}

Blogs.propTypes = {
  handleReadTime: PropTypes.func.isRequired,
  handleBookmark: PropTypes.func.isRequired,
}
