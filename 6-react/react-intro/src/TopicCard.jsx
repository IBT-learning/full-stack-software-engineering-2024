// When a component receives "props" from the parent
// those come into the function as an object, as a single argument to the function
// we can either name that argument, by convention it always named "props"
// and then access it's values as, for example, props.topic, props.rating, etc
// or we can destructure the object in place, right there in the function definition

function TopicCard({ topic, rating }) {
  return (
    <div className="topic-card">
      {topic}
      <div className="rating">rating: {rating}</div>
    </div>
  )
}

export default TopicCard
