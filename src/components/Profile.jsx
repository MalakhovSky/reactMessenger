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
      <div>My post
        <div>
          New post
        </div>
        <div className={s.item}>
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  )
}
export default Profile;