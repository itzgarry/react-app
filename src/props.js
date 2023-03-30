import React from "react";
import ReactDOM from "react-dom/client";
import flutterBird from "./images/flutter-bird.png";
import "./booklist.css";

const title = "Learn Flutter";
const description = "Coding is life!";

const Props = () => {
  return (
    <section className="booklist">
      <Book job="Developer" />
      <Book title="Hi i'm garry" />
      <Book number={6} />
    </section>
  );
};

const Book = (props) => {
  const inlineStyle = {
    color: "#617d98",
  };
  console.log(props);
  return (
    <article className="book">
      <img
        className="img-fluid rounded mx-auto d-block"
        src={flutterBird}
        alt="FlutterBird"
      />
      <h2>{title}</h2>
      <h4 style={inlineStyle}>{description}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Props />);

export default Props;
