import React, { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import Header from "./components/Header";

function App() {
  const [planets] = useState([
    {
      name: "Mercury",
      imgSrc: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY3VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Venus",
      imgSrc: "https://images.unsplash.com/photo-1614726365723-498aa67c5f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVudXMlMjBwbGFuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Earth",
      imgSrc: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Mars",
      imgSrc: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVudXMlMjBwbGFuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Jupiter",
      imgSrc: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anVwaXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Saturn",
      imgSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVudXMlMjBwbGFuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Uranus",
      imgSrc: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJhbnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Neptune",
      imgSrc: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwdHVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Neptune1",
      imgSrc: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwdHVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Neptune2",
      imgSrc: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwdHVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Neptune3",
      imgSrc: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwdHVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Neptune4",
      imgSrc: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwdHVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
  ]);
  return (
    <div className="mainContainer">
      <Header />
      <CardSection planets={planets} />
    </div>
  );
}

export default App;
