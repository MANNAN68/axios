import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AxiosApi from "./api/AxiosApi";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosApi.get("/posts");
        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}

export default App;
