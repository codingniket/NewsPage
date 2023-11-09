import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsArea = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2">
        <span className="badge bg-danger">Breaking News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsArea;
