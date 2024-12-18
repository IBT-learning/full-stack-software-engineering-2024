


function Quotes({ quotesByTags, selectedTag }) {

    if (selectedTag) {
        
        return (
            <>
            <div className='quote-tags'>
                <h4 className='mini-title'>Tags Associated With The Quote</h4>
                <span className='tag'>
                    {quotesByTags.tags.map((tagString) => 
                    <li key={tagString}>
                        {tagString}
                    </li>
                )}
                </span>
                <p className='quote'>
                    {quotesByTags.quote}
                </p>
            </div>

        </>
        )
    }
}

export default Quotes

// TODO: some quotes are associated with multiple tags
// how do i thus enusre the tagString that appears
// is only the one I've selected, and that the
// other tags don't appear even though they are 
// related to that quote

