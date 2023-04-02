import React from "react";

import FriendItem from "./Friend/FriendItem";

const Friends = (props) => {
  let FriendsElements = props.state.friends.map((friends) => (
    <FriendItem name={friends.name} id={friends.id}/>
  ));
  return <div>{FriendsElements}</div>;
};

export default Friends;
