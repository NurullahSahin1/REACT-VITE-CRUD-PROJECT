import { v4 } from "uuid";
import axios from "axios";
const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const status = e.target[1].value;

    // İnput boş mu kontrol et

    if (!title) {
      return alert("Lütfen başlık yazınız");
    }

    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };
    // oluşturduğumuz todoyu api'ye kaydet
    axios
      .post("/todos", newTodo)
      .then(() => setTodos((todos) => [...todos, newTodo]))
      .catch(() => alert("Üzgünüz bir sorun oluştu"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="Type here.."
        className="form-control shadow"
        type="text"
      />
      <select className="form-select w-50 shadow">
        <option>Varsayılan</option>
        <option value="Important">Onemli</option>
        <option value="Daily">Günlük</option>
        <option value="Job">İş</option>
      </select>
      <button className="btn btn-primary shadow" type="submit">
        Gönder
      </button>
    </form>
  );
};

export default Form;
