import React from "react";
import "./Quote.css";

const Quote = props => {
  const quote = props.quote.map((q, index) => (
    <div key={index}>
      <h1 className="quotation">{q.quote}</h1>{" "}
      <h3 className="author">~ {q.author}</h3>
    </div>
  ));
  return (
    <div className="quote">
      {quote}
      <button className="button" onClick={props.click}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
