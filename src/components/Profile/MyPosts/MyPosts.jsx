import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const  MyPosts = (props) => {

    let postsElements = props.posts.map(p =>{
        return <Post messege={p.message} likesCount={p.likesCount}/>
    })



    let newPostElement = React.createRef();

    let addPost = ()=>{
        // let text = newPostElement.current.value;
        props.addPost()


    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;