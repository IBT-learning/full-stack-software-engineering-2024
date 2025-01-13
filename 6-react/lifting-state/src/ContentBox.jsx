function ContentBox({ title, contentList, setContent, content }) {
  const removeItem = (c) => {
    // helper function takes in a content object
    // and removes matching objects from the content array
    // in the parent's state
    const newContent = content.filter((item) => item.name !== c.name)
    setContent(newContent)
  }

  if (contentList.length > 0) {
    return (
      <div className="category-box">
        <span className="title">{title}</span>
        {contentList.map((c) => (
          <span
            key={c.name}
            title={c.name.length >= 15 && c.name}
            onClick={() => removeItem(c)}
            className={c.name.length >= 15 ? "short" : "long"}
          >
            {c.name.length < 15 ? c.name : `${c.name.slice(0, 15)}...`}
          </span>
        ))}
      </div>
    )
  }
}

export default ContentBox
