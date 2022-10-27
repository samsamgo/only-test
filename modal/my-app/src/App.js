//import styles from "./App.css"
import styled from "styled-components"
//import { RiCloseLine } from "react-icons/ri"

const Button1 = styled.button`
  background : ${(props) => (props.skyblue ? "skyblue" : "white")};
`;



export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <Button1>Button</Button1>
      <Button1 skyblue>Button1</Button1>
    </>
  );
}


