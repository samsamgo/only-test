import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	button {
    border-radius : 5px;
	}
  span { 
    color:white
  }
`;

const MiusButton = styled.button`
  background-color: aqua;
  align-items: center;
  padding: 10px;
  margin: 10px;
  color: white;
`;

const PlusButton = styled(MiusButton)`
  background-color: red;
  width: 10em;
`;

const PropsDiv = styled.div`
  background: ${(props) => (props.aqua ? "aqua" : "white")};
`;

const PropsSpan = styled.span`
  padding: 10px;
  margin: 10px;
  background: ${(props) => (props.color ? props.color : "white")};
`;

function App() {
  const num = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>test 123{num}</p>
      <GlobalStyle />
      <MiusButton
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        더하기
      </MiusButton>
      <PlusButton
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        빼기
      </PlusButton>
      <br></br>
      <PropsSpan color="red">props값으로 빨간색 불러오기</PropsSpan>
      <PropsSpan color="blue">props값으로 파란색 불러오기</PropsSpan>
    </div>
  );
}

export default App;
