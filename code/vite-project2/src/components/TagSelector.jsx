import React from 'react';

function TagSelector({ tags, setSelectedTag }) {
  const handleChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div>
      <label htmlFor="tag-select">Choose a topic:</label>
      <select id="tag-select" onChange={handleChange}>
        <option value="">--Select a tag--</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
}

export default TagSelector;
