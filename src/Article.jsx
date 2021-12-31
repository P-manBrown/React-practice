import React from "react";

const Article = (props) => {
  let isPublishState;
  if (props.isPublished){
    isPublishState = "公開"
  } else {
    isPublishState = "非公開"
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>順番は{props.order}番です。</p>
    </div>
  )
};

export default Article;