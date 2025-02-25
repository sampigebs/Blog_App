import Post from "../post/Post";
import "./posts.css";
// Component to render a list of posts by mapping over the provided data and passing each post as props

export default function Posts({data}) {
  return (
    <div className="posts">
      {
        data.map((el)=>{
          return(<>
          <Post {...el}/>
          
          </>)
        })
      }
      </div>
  );
}
