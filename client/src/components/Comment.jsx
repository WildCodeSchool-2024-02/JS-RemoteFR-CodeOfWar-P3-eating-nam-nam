import PropTypes from "prop-types";

export default function Comment({ commentary }) {
  return (
    <div className="CommentItem">
      <h2>{commentary.username}</h2>
      <p>{commentary.content}</p>
      <small>{new Date(commentary.created_at).toLocaleString()}</small>
    </div>
  );
}

Comment.propTypes = {
  commentary: PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};
