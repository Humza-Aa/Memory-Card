import React, { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import Header from "./components/Header";



function App() {

  const [planets] = useState([
    {
      name: "Mercury",
      imgSrc: "https://images.unsplash.com/photo-1614724723656-457e78e0b50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY3VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Venus",
      imgSrc: "https://i.natgeofe.com/k/4cb0a0ba-bcbe-450f-87d0-050bf40678a0/venus-planet_3x2.jpg",
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
      name: "Moon",
      imgSrc: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      name: "Sun",
      imgSrc: "https://images.unsplash.com/photo-1645235142939-096560a17aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1biUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Pluto",
      imgSrc: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      name: "Unknown",
      imgSrc: "https://images.unsplash.com/photo-1548284706-24b96b23d6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW5ldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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
