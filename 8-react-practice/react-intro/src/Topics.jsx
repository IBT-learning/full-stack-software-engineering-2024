function TopicCard ({classTopic, rating}) {
    return (
    <div key={classTopic} className='topic-card'>
        {classTopic}

    <div className='rating'> rating: {rating} </div>
    </div>
    )
}
export default TopicCard