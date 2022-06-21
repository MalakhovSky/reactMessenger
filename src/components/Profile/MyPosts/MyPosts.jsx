import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
      <Post messege='Hi,how are u' likesCount = '10'/>
      <Post messege ='its my first post' likesCount = '15'/>
      </div>
    </div>
    
  )
}
export default MyPosts;