import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/test", {
        data: {
          post_id: 1,
          comment_id: 13,
          username: "foo",
        },
      })
      .then(function (response) {
        // response
        console.log(response.data); //데이터 전송 성공시
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      }); //컴포넌트가 리랜더링 될때마다 실행
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
