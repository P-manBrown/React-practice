import {useState} from "react";
import LikeButton from "./LikeButton";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  console.log(isPublished)

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()}></input>
      <LikeButton count={props.count} />
    </div>
  )
};

export default Article;