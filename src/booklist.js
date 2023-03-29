import React from "react";
import ReactDOM from "react-dom/client";
import flutterBird from "./images/flutter-bird.png";

const BookList = () => {
  return (
    <section>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Discription></Discription>
    </article>
  );
};

const Image = () => <img className="img-fluid" src={flutterBird} alt="FlutterBird" />;
const Title = () => <h2>Learn Flutter</h2>;
const Discription = () => {
  return <h4>Coding is life!</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
