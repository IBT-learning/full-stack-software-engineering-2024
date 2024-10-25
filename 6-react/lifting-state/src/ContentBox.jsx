function ContentBox({ title, contentList, setContent, content }) {
  const removeItem = (c) => {
    // helper function takes in a content object
    // and removes matching objects from the content array
    // in the parent's state
    const newContent = content.filter((item) => item.name !== c.name)
    setContent(newContent)
  }

  return (
    <div className="category-box">
      <span className="title">{title}</span>
      {contentList.map((c) => (
        <span key={c.name} onClick={() => removeItem(c)}>
          {c.name}
        </span>
      ))}
    </div>
  )
}

export default ContentBox
