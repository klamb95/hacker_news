import React from 'react';


const NewsFilter = ({onArticleSearched}) => {

    const handleSubmit = function(event) {
        event.preventDefault()
        const searchText = 'google'
        console.log(searchText)
        onArticleSearched(searchText);
        
    };

    return(
        <div>
            <form>
                <input type='text' placeholder='Search News Here' id="test"></input>
                <input type='submit' value='Search' onClick={handleSubmit}></input>
            </form>
        </div>
    )

};

export default NewsFilter;