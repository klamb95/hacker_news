import React, {useState, useEffect} from 'react';
import NewsFilter from '../components/NewsFilter';
import NewsList from '../components/NewsList';
import './NewsContainer.css'

const NewsContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(results => results.json())
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

      const onArticleSearched = function(text){
        return articles.filter((article) => {
            return article.title.includes(text)
          })
      }



    return (
        <div id="Background">
        <h1 id="Header">Hacker News</h1>
        <NewsFilter onArticleSearched={onArticleSearched}/>
        <hr/>
        <NewsList articles={articles} />

        </div>
    )
};
      




export default NewsContainer;