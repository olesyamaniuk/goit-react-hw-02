import { useState, useEffect } from "react";
import Description from ".//Description/Description"
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback"
import Notification from "./Notification/Notification"

export default function App() {
  const [feedback, setFeedback] = useState (()=>{
    const savedFeedback = localStorage.getItem("feedbackCount");
    if(savedFeedback !== null){
      return JSON.parse(savedFeedback)
    }
    return {
      good: 0,
      neutral: 0,
      bad:0
    };
   })
  
  useEffect(()=>{
    localStorage.setItem("feedbackCount", JSON.stringify(feedback))
  }, [feedback]);
  
  const updateFeedback = (feedbackType) => {
      setFeedback(prevFeedback => ({
          ...prevFeedback,
          [feedbackType]: prevFeedback[feedbackType] + 1
      }));
  
  };
  
  const resetFeedback = ()=> {
    setFeedback({good:0, neutral:0, bad:0});
  };
  const totalFeedback= feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = Math.round((feedback.good/totalFeedback)*100);
  
  
    return (
      <>
        <Description></Description>
        <Options 
        onUpdate = {updateFeedback}
        totalFeedback = {totalFeedback}
        resetFeedback = {resetFeedback}/>
      
        {totalFeedback > 0 ?(
        <Feedback 
        value={feedback}
        totalFeedback = {totalFeedback}
        positiveFeedback ={positiveFeedback}/>
        ):(
        <Notification message="No feedback yet."/>)}
      </>
      
    )
  }