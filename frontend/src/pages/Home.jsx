import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineAddBox } from "react-icons/md";
import Spinner from "../Components/Spinner";
import Bookstable from "../Components/Home/bookstable";
import Bookscard from "../Components/Home/bookscard";

const Home = () => {
  const [books, SetBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  let [showtype, setShowtype] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1512/books")
      .then((response) => {
        SetBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("table")}
        >
          Table
        </button>

        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"></h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          (showtype = "table" ? (
            <Bookstable books={books} />
          ) : (
            <Bookscard cards={books} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
