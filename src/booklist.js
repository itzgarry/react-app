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
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Discription></Discription>
    </article>
  );
};

const Image = () => (
  <img
    className="img-fluid rounded mx-auto d-block"
    src={flutterBird}
    alt="FlutterBird"
  />
);

const inlineStyle = {
  color: "#617d98",
};

const Title = () => <h2>Learn Flutter</h2>;
const Discription = () => {
  return <h4 style={inlineStyle}>Coding is life!</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
