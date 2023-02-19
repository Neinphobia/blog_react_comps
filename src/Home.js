import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import axios from "axios";

const mongoose = require("mongoose");

const Home = () => {
  

 fetch('http://localhost:3000/name/get')
  .then(res=>res.json())
  .then(data => console.log(data));
  


  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  const [ax, setAx] = useState("");
  const handleAx = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setAx(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          Yükleniyor.. <br />
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="Tüm Bloglar!" />}
      <button onClick={handleAx}>Axios ile data çek</button>
      {ax && <h4>{ax}</h4>}
    </div>
  );
};

export default Home;
