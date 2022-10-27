import styles from "./App.css"
import styled from "styled-components"
//import { RiCloseLine } from "react-icons/ri"

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

const BigBlueButton = styled(BlueButton)`
margin-top : 10px;
padding : 10px
`;

const BigRedButton = styled(BigBlueButton)`
background-color : red;
`;




export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <BlueButton>Blue Button</BlueButton>
      <br />
      <BigBlueButton>Big Blue Button</BigBlueButton>
      <br />
      <BigRedButton>Big Red Button</BigRedButton>
    </>
  );
}


