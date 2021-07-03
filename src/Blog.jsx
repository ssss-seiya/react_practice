import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

class Blog extends React.Component {
  constructor(props) {
    super(props); // これを記述するとクラス内でthis.propsを使える
    this.state = {
      isPublished: false,
      order: 0,
      count: 0
    }
  }

  // ボタンがクリックされたらいいねをカウントアップする
  componentDidMount() {
    document.getElementById('counter').addEventListener('click', this.countUp)
  };

  // いいね数が10以上だとカウントをリセットする
  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }

  // 公開状態を反転させる関数を定義する
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  // カウントアップさせる関数を定義する
  countUpOrder = () => {
    this.setState({
      order: this.state.order + 1
    })
  };

  // カウントをリセットする関数を定義する
  resetOrder = () => {
    this.setState({
      order: 0
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return(
      <>
        <Article
          title={'Reactの使い方'}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          order={this.state.order}
          countup={() => this.countUpOrder()}
          reset={() => this.resetOrder()}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
  }
}
export default Blog
