const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  return (
    <form
      onSubmit={handleEdit}
      className="d-flex justify-content-between w-100 gap-3"
    >
      <select
        defaultValue={todo.status}
        className="form-select shadow w-25 p-2"
      >
        <option value="Default">Varsayılan</option>
        <option value="Job">İş</option>
        <option value="Important">Önemli</option>
        <option value="Daily">Günlük</option>
      </select>

      <input
        defaultValue={todo.title}
        className="form-control shadow p-2 w-50"
        type="text"
      />
      <div className="btn-group">
        <button type="submit" className="btn btn-success btn-sm p-2">
          Confirm
        </button>
        <button
          type="button"
          onClick={() => setIsEditMode(false)}
          className="btn btn-secondary btn-sm p-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditMode;
