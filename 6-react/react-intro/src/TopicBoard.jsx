import "./TopicBoard.css"
import TopicCard from "./TopicCard"

function TopicBoard() {
  const topics = ["HTML", "CSS", "Javascript", "Express", "MongoDB"]

  return (
    <div className="topic-wrapper">
      {/* we can perform any JS expression inside curly brackets
      as long as that expression resolves to something that can be rendered as HTML
      so for example, .forEach() returns undefined, but .map() returns a new array
      if we make sure that array contains JSX/HTML elements, it can be rendered
      */}
      {topics.map((topic) => (
        // these key/val pairs that look like custom HTML attributes are actually "props" (properties)
        // that will be passed into the child component
        // (except "key")
        <TopicCard key={topic} topic={topic} rating={topic.length} />
        // whenever we generate a list we need to give each element
        // a unique "key" property
        // to help React be able to keep track of the elements
        // if we ever dynamically mutate the array in the future
      ))}
    </div>
  )
}

export default TopicBoard
