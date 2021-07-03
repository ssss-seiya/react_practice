import React from 'react';

const Article = (props) => {

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor='check'>公開状態:</label>
      <input
        type='checkbox'
        checked={props.isPublished}
        id='check'
        onClick={() => props.toggle()}
      />
      <br/>
      <p>{props.order}</p>
      <button onClick={() => props.countup()}>カウントアップ</button>
      <button onClick={() => props.reset()}>リセット</button>
    </div>
  )
};

export default Article;
