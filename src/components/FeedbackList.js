import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  // console.log(feedback);
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} key={item.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // Without animation
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem item={item} key={item.id} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
