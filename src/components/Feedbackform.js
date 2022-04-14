import React, { useState, useContext, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Ratingselect from "./Ratingselect";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackform() {
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { inputHandler, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleText = (e) => {
    if (text === "") {
      setMessage("Atleast 10 characters are required");
      setDisable(true);
    } else if (text.trim().length < 10) {
      setMessage("Atleast 10 characters are required");
      setDisable(true);
    } else {
      setMessage("");
      setDisable(false);
    }
    setText(e.target.value);
  };
  const handleSelect = (rating) => {
    setRating(rating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
        rating,
        text,
    };
    // console.log(newData)
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id,newData)
    } else {
      inputHandler(newData);
    }

    setText("");
    setRating(10);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please Rate this App</h2>
        <Ratingselect select={handleSelect} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleText}
            value={text}
          />
          <Button type="submit" version="secondary" isDisable={disable}>
            Submit
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default Feedbackform;
