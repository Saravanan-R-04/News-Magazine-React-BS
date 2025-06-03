import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setArticle(data.articles)) 
      .catch(err => console.error("Error fetching news:", err));
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>Latest <span className='font-bold'>News</span></h2>

      <div>
        {article.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
