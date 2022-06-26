import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi,how are u', likesCount: '10'},
    {id: 2, message: 'its my first post', likesCount: '15'},
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Duglas'},
    {id: 4, name: 'Robertos'},
    {id: 5, name: 'Javani'},
    {id: 6, name: 'Jorjio'},
]


let messages = [
    {id: 1, message: 'message'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Where are u?'},
    {id: 4, message: 'I\'m Javany Jorjio'},
    {id: 5, message: 'Pip pip'},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
