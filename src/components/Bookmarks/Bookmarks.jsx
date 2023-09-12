// import { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import Readtime from "../Readtime/Readtime";
import PropTypes from 'prop-types'

export default function Bookmarks({ bookmarks, readTime }) {

  return (
    <div className="md:w-1/3">
      <Readtime readTime={readTime}></Readtime>
      <div className="bg-slate-200 rounded-md pb-4">
        <h2 className="text-2xl font-bold text-center mt-4 py-4">Bookmarked Blogs: {bookmarks.length}</h2>
        {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
      </div>
    </div>
  )
}


Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number
}