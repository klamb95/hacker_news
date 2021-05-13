import React from 'react';
import ListItem from './ListItem';
// import NewsFilter from './NewsFilter';

const NewsList = ({articles}) => {

    const articleItems = articles.map((article, index) => {
        return <ListItem article={article} key={index}/>
    });

    return (
        <div>
            <ul>
                {articleItems}
            </ul>
        </div>
    )
}



export default NewsList;