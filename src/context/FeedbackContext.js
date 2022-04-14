import React, { useState, createContext } from "react";

const FeedbackContext = createContext();
export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Feedback 12 elemnt ",
    },
    {
      id: 2,
      rating: 9,
      text: "Feedback 12 elemnt 2345",
    },
  ])
  const [feedbackEdit,setFeedbackEdit]=useState({
      item:{},
      edit:false
  })
  //delete handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
    //   console.log(id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //input handler
  const inputHandler = (newItem) => {
      const feedback_new={
          id:Math.random(),
          rating:newItem.rating,
          text:newItem.text
      }
      // console.log(feedback_new);
    setFeedback([feedback_new, ...feedback]);
  };
  //update handler
  const editFeedback=(item)=>{
       setFeedbackEdit({
           item:item,
           edit:true
       })
  };
   //update feedback
   const updateFeedback=(id,updItem)=>{
    setFeedback(feedback.map(item=>(item.id===id?{...item,...updItem}:item)))
   }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDelete,
        inputHandler,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
