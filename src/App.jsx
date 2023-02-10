import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/api";
import Table from "./Table";

function App() {
  const { data, isSuccess } = useQuery(["reoı"], getPosts);

  return (
    <div className="App">
      <div className="container">{isSuccess && <Table data={data} />}</div>
    </div>
  );
}

export default App;
