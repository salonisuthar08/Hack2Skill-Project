import React from "react";

const AIEnhancer = ({ story, setStory }) => {
  const enhance = () => {
    if (!story) return alert("Write a story first!");
    setStory(story + " ✨ Enhanced by AI!");
    alert("Story enhanced!");
  };

  return <button type="button" onClick={enhance}>Enhance Story</button>;
};

export default AIEnhancer;
