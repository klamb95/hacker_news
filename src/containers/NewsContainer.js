import React, {useState, useEffect} from 'react';
import NewsFilter from '../components/NewsFilter';
import NewsList from '../components/NewsList';

const NewsContainer = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        createUrls();
    },[]);

    const getList = () => {
        
        
        // .then(data => data)
    }

    const createUrls = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(results => results.json())
        .then(data => data.map((id) => {
        return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        }))
        .then(urls => (urls))

        

    }

    // const getArticles = () => {
    //     Promise.all(createUrls())
    //     .then(articles => setArticles(articles))
    // }
    

    return (
        <>
        <p>Hi</p>
        </>
    )
};





export default NewsContainer;