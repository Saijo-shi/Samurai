let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  addMessage(message) {
    let newMessage = {
      id: 6,
      message: message,
      likesCount: 0,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";

    this._callSubscriber(this._state);
  },
  updateNewMessageText(MessageText) {
    this._state.dialogsPage.newMessageText = MessageText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
      if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
export default store;
