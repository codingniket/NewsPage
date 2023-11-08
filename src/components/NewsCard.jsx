import React from 'react';

const NewsCard = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block m-3 p-2"
      style={{ maxWidth: '345px' }}
    >
      <div style={{ paddingBottom: '60%', position: 'relative' }}>
        <img
          src={src}
          style={{
            maxWidth: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 109) + '...'
            : 'Description not found from backend'}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
