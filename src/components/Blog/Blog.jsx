import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";

export default function Blog({ blog, handleReadTime, handleBookmark }) {

  const { id, title, cover, author_img, author_name, reading_time, posted_date, hashtags } = blog;
  // console.log(blog)

  return (
    <div className="rounded-md shadow-md p-5 bg-white mb-5">
      <figure className="mb-5">
        <img className="w-full rounded-md" src={cover} alt={title} />
      </figure>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <img className="h-12 w-12 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font-medium">{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <p className="flex gap-2 justify-center items-center font-xl">
          <span className="text-gray-500">{reading_time} min read</span>
          <span onClick={() => handleBookmark(blog)} className="tex-md cursor-pointer"><BsBookmark></BsBookmark></span>
        </p>
      </div>
      <h2 className="text-2xl font-bold mt-2 mb-5">{title}</h2>
      <div>
        {hashtags.map((hashtag, idx) => <a key={idx} href="#">#{hashtag} </a>)}
      </div>
      <button onClick={() => handleReadTime(id, reading_time)} className="btn px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded text-white mt-2 font-bold">Mark as Read</button>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleReadTime: PropTypes.func.isRequired,
  handleBookmark: PropTypes.func.isRequired,
}
