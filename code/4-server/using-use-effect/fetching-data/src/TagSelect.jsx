import React from "react";

const TagSelect = ({ tags, onTagChange, selectedTag }) => {
  return (
    <select onChange={onTagChange} value={selectedTag}>
      <option value="">Select a tag</option>
      {tags.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagSelect;

 
