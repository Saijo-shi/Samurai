import { rerenderEntireTree } from "../../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        post: "Hi, how are you?",
        likesCount: 12,
      },
      {
        id: 2,
        post: "It's my first post",
        likesCount: 23,
      },
      {
        id: 3,
        post: "Goin outdoors",
        likesCount: 12,
      },
      {
        id: 4,
        post: "Just doin HW",
        likesCount: 23,
      },
    ],
    newPostText: "it-kamasutra.com",
  },

  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Vasilii",
      },
      {
        id: 2,
        name: "Liudmila",
      },
      {
        id: 3,
        name: "Valentina",
      },
      {
        id: 4,
        name: "Elena",
      },
      {
        id: 5,
        name: "Denis",
      },
      {
        id: 6,
        name: "Nikolai",
      },
    ],

    messages: [
      {
        id: 1,
        message: "Hi",
      },
      {
        id: 2,
        message: "How is your IT-Kamasutra?",
      },
      {
        id: 3,
        message: "Yo",
      },
      {
        id: 4,
        message: "Yo",
      },
      {
        id: 5,
        message: "Yo",
      },
    ],
    newMessageText: "it-kamasutra.com",
  },

  sidebar: {
    friends: [
      {
        id: 1,
        name: "Katya",
      },
      {
        id: 2,
        name: "Sasha",
      },
      {
        id: 3,
        name: "Vika",
      },
      {
        id: 4,
        name: "Igor",
      },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";

  rerenderEntireTree(state);
};

export let updateNewPostText = (newPost) => {
  state.profilePage.newPostText = newPost;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";

  rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  // rerenderEntireTree(state);
};

export default state;
