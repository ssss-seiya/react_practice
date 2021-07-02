import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props); // これを記述するとクラス内でthis.propsを使える
  }
  render() {
    const authorName = 'Torahack'
    return(
      <>
        <Article
          title={'Reactの使い方'}
          order = {3}
          isPublished={true}
          author={authorName}_
        />
      </>
    )
  }
}
export default Blog
