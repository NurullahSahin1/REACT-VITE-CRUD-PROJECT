import getStatus from "../helpers/getStatus";

const NormalContent = ({ todo, setIsEditMode, handleDelete }) => {
  return (
    <>
      {getStatus(todo.status)}
      <span>{todo.title}</span>
      <div className="btn-group">
        <button onClick={() => setIsEditMode(true)} className="btn btn-primary">
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Del
        </button>
      </div>
    </>
  );
};

export default NormalContent;
