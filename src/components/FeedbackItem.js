import React,{useContext}from "react";
import Card from "../UI/Card";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const {handleDelete,editFeedback}=useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className='close' onClick={ ()=>handleDelete(item.id)}><DeleteIcon  /></button>
      <button className='edit'onClick={()=>editFeedback(item)}><EditIcon  /></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
