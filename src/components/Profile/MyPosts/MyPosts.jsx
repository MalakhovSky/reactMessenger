import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post messege='Hi,how are u' likesCount='10'/>
                <Post messege='its my first post' likesCount='15'/>
            </div>
        </div>

    )
}
export default MyPosts;