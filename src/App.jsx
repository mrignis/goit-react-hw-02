import React from "react";
import Profile from "./components/Profile";
import userData from "../src/userData.json";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import friends from "../src/friends.json";
import transactions from "../src/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
