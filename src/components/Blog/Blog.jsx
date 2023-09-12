import PropTypes from 'prop-types';

export default function Blog({blog}) {

  console.log(blog);

  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
}
