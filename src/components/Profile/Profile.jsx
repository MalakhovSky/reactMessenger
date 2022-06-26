import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo dialogs = {props.dialogs} messagws = {props.messages}/>
            <MyPosts posts = {props.posts}/>
        </div>
    )
}
export default Profile;