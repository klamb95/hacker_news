import React from 'react';

const ListItem = ({article}) => {
    return <li><a href={article.url}>{article.title}</a></li>
}



export default ListItem;