import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    }
  }

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById('counter').addEventListener('click',this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    }
  };

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click',this.countUp)
  }


  // 公開状態を変更するための関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return(
      <>
        <Article
          title="Reactの練習"
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={() => this.state.count}
        />
      </>
    )
  }
}

export default Blog;