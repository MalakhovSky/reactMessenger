import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://hdwallpaperim.com/wp-content/uploads/2017/08/24/98601-minimalism.jpg'></img>
      </div>
      <div >
        ava + discription
      </div>
      
     <MyPosts/>
    </div>
  )
}
export default Profile;