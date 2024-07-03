import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/input";
import Input2 from "./pages/Input2";
import UserList from "./pages/List";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to ="/Counter">Counter</Link> |
        <Link to ="/input">input</Link> |
        <Link to ="/Input2">input2</Link> |
        <Link to ="/UserList">UserList</Link> |
        
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/Input2" element={<Input2/>}/>
        <Route path="/UserList" element={<UserList/>}/>
      </Routes>
    </div>
  );
}

export default App;
