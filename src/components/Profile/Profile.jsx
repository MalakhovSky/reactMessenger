import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo dialogs = {props.state.dialogs} messagws = {props.state.messages}/>
            <MyPosts posts = {props.state.posts}/>
        </div>
    )
}
export default Profile;