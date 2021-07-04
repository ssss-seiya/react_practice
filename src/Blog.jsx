import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

const Blog = () => {

  // // ボタンがクリックされたらいいねをカウントアップする
  // componentDidMount() {
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // };

  // // いいね数が10以上だとカウントをリセットする
  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState({
  //       count: 0
  //     })
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // // カウントアップさせる関数を定義する
  // countUpOrder = () => {
  //   this.setState({
  //     order: this.state.order + 1
  //   })
  // };

  // // カウントをリセットする関数を定義する
  // resetOrder = () => {
  //   this.setState({
  //     order: 0
  //   })
  // };

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };

    return(
      <>
        <Article
          title={'Reactの使い方'}
          // count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
}
export default Blog
