import React from 'react';

const Article = (props) => {

  let PublishState = '';
  if (props.isPublished) {
    PublishState = '公開'
  } else {
    PublishState = '非公開'
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です</p>
      <p>著書：{props.author}</p>
      <p>{PublishState}</p>
    </div>
  )
};

export default Article
