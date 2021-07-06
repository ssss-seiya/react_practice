import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

const Blog = () => {
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
