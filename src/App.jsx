import { useEffect, useState } from "react";
import Form from "./components/form";
import Loader from "./components/loader";
import ListItem from "./components/ListItem";
import axios from "axios";

axios.defaults.baseURL = `http://localhost:3030`;

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
        params: {
          _page: page,
          _per_page: 10,
        },
      })
      .then((res) => {
        setTodos(res.data.data);
        setMaxPage(res.data.pages);
      })
      .catch((err) => {
        if (err.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, [page]);

  return (
    <div className="container p-2 p-md-5">
      <h1 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h1>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos && <Loader />}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          {"< Geri"}
        </button>
        <span>{page}</span>
        <button
          disabled={page === maxPage}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          {" Ileri>"}
        </button>
      </div>
    </div>
  );
}

export default App;
