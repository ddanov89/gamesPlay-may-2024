import { Link, useParams } from "react-router-dom";
import { useGetOneGame } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
  comments: "",
};

export default function GameDetails() {
  const { gameId } = useParams();
  const [comments, dispatch] = useGetAllComments(gameId);

  const { email } = useAuthContext();
  const createComment = useCreateComment();
  const { isAuthenticated } = useAuthContext();
  const [game] = useGetOneGame(gameId);

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    async ({ comment }) => {
      try {
        const newComment = await createComment(gameId, comment);
        // setComments(oldComments => [...oldComments, newComment]);
        dispatch({
          type: "ADD_COMMENT",
          payload: { ...newComment, author: { email } },
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  );

  // const [game, setGame] = useGetOneGame(gameId);
  // const [comment, setComment] = useState('');

  // const commentSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   const newComment = await commentsApi.create(gameId, username, comment);

  //   setGame((prevState) => ({
  //     ...prevState,
  //     comments: {
  //       ...prevState.comments,
  //       [newComment._id]: newComment,
  //     },
  //   }));

  //   setUsername("");
  //   setComment("");
  // };
  const isOWner = userId == game._ownerId;

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="comment">
                <p>
                  {comment.author.email}: {comment.text}
                </p>
              </li>
            ))}
            {comments.length == 0 && <p className="no-comment">No comments.</p>}
          </ul>
        </div>

       
        {isOWner && (
          <div className="buttons">
            <Link to="#" className="button">
              Edit
            </Link>
            <Link to="#" className="button">
              Delete
            </Link>
          </div>
        )}
      </div>
      {isAuthenticated && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={submitHandler}>
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={values.comment}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
}
