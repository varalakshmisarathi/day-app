import React from "react";
import Card from "./Card";

const Tracker = ({ days, createTask, toggleTask,Deletetask,setDays }) => {
  return (
    <div className="main-container">
      {days.map((day, index) => (
        <Card
          key={index}
          day={day}
          createTask={(value) => createTask(index, value)}
          toggleTask={(taskIndex) => toggleTask(index, taskIndex)}
          Deletetask={(taskIndex)=>Deletetask(index,taskIndex)}
          deleteday={() => setDays(days.filter((count, i1) => {
            return index !== i1
        
          }))}
      />
      ))}
    </div>
  );
};

export default Tracker;
