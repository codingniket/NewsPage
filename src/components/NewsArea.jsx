import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsArea = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a7e78f8e0b7470e92b621d6cb336db8`;
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
