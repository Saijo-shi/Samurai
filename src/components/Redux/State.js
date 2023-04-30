import { rerenderEntireTree } from "../../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "Hi, how are you?",
        likesCount: 12,
      },
      {
        id: 2,
        message: "It's my first post",
        likesCount: 23,
      },
      {
        id: 3,
        message: "Goin outdoors",
        likesCount: 12,
      },
      {
        id: 4,
        message: "Just doin HW",
        likesCount: 23,
      },
    ],
    newPostText: 'it-kamasutra.com',
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

    chats: [
      {
        id: 1,
        chat: "Hi",
      },
      {
        id: 2,
        chat: "How is your IT-Kamasutra?",
      },
      {
        id: 3,
        chat: "Yo",
      },
      {
        id: 4,
        chat: "Yo",
      },
      {
        id: 5,
        chat: "Yo",
      },
    ],
    newChatText: "it-kamasutra.com",
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

// window.state = state;

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,  
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";

  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addChat = (chatMessage) => {
  let newChat = {
    id: 6,
    chat: chatMessage,
  };
  state.dialogsPage.chats.push(newChat);
  state.dialogsPage.newChatText = "";

  rerenderEntireTree(state);
};

export let updateNewChatText = (newChat) => {
  state.dialogsPage.newChatText = newChat;
  rerenderEntireTree(state);
};

export default state;
