import React from "react";
import ReactDOM from "react-dom/client";
import "./booklist.css";
// import flutterBird from "./images/flutter-bird.png";

const tutorial = [
  {
    title: "Learn Flutter",
    description: "Coding is life!",
    // flutterBird: "./images/flutter-bird.png",
    flutterBird:
      "https://1.bp.blogspot.com/-2ivCJOjKWk0/YWhvY3KZ0iI/AAAAAAAALBc/1sAaoUb_AcwkewTHzVom8gcM823zxCjGgCLcBGAsYHQ/s0/image1.png",
    id: 1,
  },
  {
    title: "Learn Java",
    description: "Coding is life!",
    // flutterBird: "./images/java-logo.png",
    flutterBird:
      "data:image/png;base64,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",
    id: 2,
  },

  {
    title: "Learn Python",
    description: "Coding is life!",
    flutterBird:
      "https://png.pngitem.com/pimgs/s/84-847371_python-data-science-logo-hd-png-download.png",
    id: 3,
  },
  {
    title: "Learn C++",
    description: "Coding is life!",
    flutterBird: "https://isocpp.org/files/img/1*YoSAmfIDl_BLrT70dHAe5Q.png",
    id: 4,
  },
];

const List = () => {
  return (
    <section className="booklist">
      {tutorial.map((i) => {
        const { flutterBird, title, description, id } = i;
        return <Course {...i} key={i.id} />;
      })}
    </section>
  );
};

const Course = (props) => {
  const inlineStyle = {
    color: "#617d98",
  };

  const titleStyle = {
    marginTop: "12px",
  };
  const { flutterBird, title, description, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img
        className="img-fluid rounded mx-auto d-block"
        src={flutterBird}
        alt="FlutterBird"
      />
      <h2 style={titleStyle}>{title}</h2>
      <h4 style={inlineStyle}>{description}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);

export default List;
