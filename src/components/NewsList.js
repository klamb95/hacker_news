import React from 'react';
import ListItem from './ListItem';

const NewsList = ({articles}) => {

    const articleItems = articles.map((article, index) => {
        console.log(article.url)
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