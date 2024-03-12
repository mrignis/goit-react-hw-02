import React from "react";
import FriendListItem from "./FriendListItem"; // імпортуємо компонент FriendListItem
import styles from'./FriendList.module.css';



const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
