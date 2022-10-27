//import styles from "./App.css"
import styled from "styled-components"
//import { RiCloseLine } from "react-icons/ri"

const Button1 = styled.button`
  background : ${(props) => (props.color ? props.color : "white")};
`;



export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <Button1>Button</Button1>
      <Button1 color="orange">Button1</Button1>
      <Button color="skyblue">Button1</Button>
    </>
  );
}


