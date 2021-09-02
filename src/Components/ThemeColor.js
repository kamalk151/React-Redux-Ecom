import React from "react";


// this is the equivalent to the createStore method of Redux


const UserContext = React.createContext({theme: {BackgroundColor:'#f4f4f4', fontColor:'##6e6a6a'}});

// creating Provider and Consumer and exporting them.

export const UserProvider = UserContext.Provider

export const UserConsumer = UserContext.Consumer

export default UserContext