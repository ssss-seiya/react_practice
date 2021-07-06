import React, {useEffect, useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);
  const [isCount, countButton] = useState(0);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor='check'>公開状態:</label>
      <input
        type='checkbox'
        checked={isPublished}
        id='check'
        onClick={() => togglePublished(!isPublished)}
      />
      <br/>
      <p>{isCount}</p>
      <button onClick={() => countButton(isCount + 1)}>カウントアップ</button>
      <button onClick={() => countButton(0)}>リセット</button>
      <br />
      <LikeButton />
    </div>
  )
};

export default Article;
