// import {rerenderEntireTree} from "../index"
let rerenderEntireTree = () =>{
    console.log('srfdadsa')
}
let state = {
    friends:[{id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Duglas'},],
    profilePage:{
        posts:[
            {id: 1, message: 'Hi,how are u', likesCount: '10'},
            {id: 2, message: 'its my first post', likesCount: '15'},
        ],
        newPostText: 'hI new post text'

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'message'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Where are u?'},
            {id: 4, message: 'I\'m Javany Jorjio'},
            {id: 5, message: 'Pip pip'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Duglas'},
            {id: 4, name: 'Robertos'},
            {id: 5, name: 'Javani'},
            {id: 6, name: 'Jorjio'},
        ],
    }

}
window.state = state;

export const addPost =()=>{
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText=(newText)=>{


    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
