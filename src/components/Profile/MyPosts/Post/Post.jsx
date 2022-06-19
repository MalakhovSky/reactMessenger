import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src = 'https://steamuserimages-a.akamaihd.net/ugc/1783983224961662632/55929AC70F42D63BC9F3E0A018E5E54F61D9665D/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'></img>
      post 1
      <div>
      <span>like</span>
      </div>
    </div>
  )
}
export default Post;