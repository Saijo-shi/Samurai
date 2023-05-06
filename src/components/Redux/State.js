let rerenderEntireTree = () => {
  console.log ('State was changed');
}

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

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 0,  
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";

  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = (message) => {
  let newMessage = {
    id: 6,
    message: message,
    likesCount: 0,  
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";

  rerenderEntireTree(state);
};

export const updateNewMessageText = (MessageText) => {
  state.dialogsPage.newMessageText = MessageText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
rerenderEntireTree = observer;
}


export default state;
