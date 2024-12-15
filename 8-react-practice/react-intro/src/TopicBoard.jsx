import TopicCard from "./Topics"

function TopicBoard(props){
    const topics = ["HTML", "CSS",  "Javascript", "Express", "MongoDB"]
    return (
    <div className='topic-wrapper'>
        {
          topics.map((e) => (
            <TopicCard 
            key = {e}
            classTopic = {e} 
            rating = {e.length}
            />
          ))
        }
        
        </div>
    )
}

export default TopicBoard
