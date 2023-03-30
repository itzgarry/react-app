import React from "react";
import ReactDOM from "react-dom/client";
import flutterBird from "./images/flutter-bird.png";
import "./booklist.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  const title = "Learn Flutter";
  const description = "Coding is life!";
  const inlineStyle = {
    color: "#617d98",
  };
  return (
    <article className="book">
      <img
        className="img-fluid rounded mx-auto d-block"
        src={flutterBird}
        alt="FlutterBird"
      />
      <h2>{title}</h2>
      <h4 style={inlineStyle}>{description}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
