//import styles from "./App.css"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
//import { RiCloseLine } from "react-icons/ri"

const GlobalStyle = createGlobalStyle`
  button{
    padding : 5px;
    margin : 2px;
    border-radius : 5px
  }
`


const Button1 = styled.button`
  background : ${(props) => (props.color ? props.color : "white")};
`;



export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <GlobalStyle />
      <Button1>Button</Button1>
      <Button1 color="orange">Button1</Button1>
      <Button1 color="skyblue">Button1</Button1>
    </>
  );
}


