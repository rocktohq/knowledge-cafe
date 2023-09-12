import PropTypes from 'prop-types';

export default function Readtime({readTime}) {
  return (
    <div className="p-5 rounded-md bg-slate-200 border-2 border-purple-500">
      <h2 className="text-2xl font-bold text-center text-purple-500">Spent time on read: {readTime} min</h2>
    </div>
  )
}

Readtime.propTypes = {
  readTime: PropTypes.number
}