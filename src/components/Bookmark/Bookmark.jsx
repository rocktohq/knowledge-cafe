import PropTypes from 'prop-types';

export default function Bookmark({ bookmark }) {
  // console.log(bookmark);
  return (
    <div className="bg-white mt-2 rounded-md p-4 mx-4">
      <h2 className="text-xl font-medium">{bookmark.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
}
