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
      <label htmlFor="check">公開状態</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()}></input>

    </div>
  )
};

export default Article;