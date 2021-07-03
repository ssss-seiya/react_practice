import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props); // これを記述するとクラス内でthis.propsを使える
    this.state = {
      isPublished: false,
      order: 0
    }
  }

  // 公開状態を反転させる関数を定義する
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    return(
      <>
        <Article
          title={'Reactの使い方'}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </>
    )
  }
}
export default Blog
