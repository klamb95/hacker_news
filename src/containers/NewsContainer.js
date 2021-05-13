import React, {useState, useEffect} from 'react';
import NewsFilter from '../components/NewsFilter';
import NewsList from '../components/NewsList';

const NewsContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(res => res.json())
          .then((data) => {
            const newData = data.slice(0, 20);
            const promises = newData.map((id) => {
              return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json());
            });
            Promise.all(promises)
              .then((results) => {
                setArticles(results);
                
              });
          });
      }, []);



    return (
        <>
        <NewsList articles={articles}/>
        </>
    )
};
      




export default NewsContainer;