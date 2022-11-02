// import React from "react";
// import styled from "styled-components";

// const StyledButton = styled.button`
//     background : ${(props) => props.color || "white"};
//     width : ${(props) => (props.size === "big" ? "200px" : "100px")};
//     height : ${(props) => (props.size === "big" ? "80px" : "40px")}
// `

// const Button = ({ color, size, text }) => (
//     <StyledButton color={color} size={size} > {text} </StyledButton>
// );

// export default Button   
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: ${(props) => props.color || "white"};
    width: ${(props) => (props.size === "big" ? "200px" : "100px")};
    height: ${(props) => (props.size === "big" ? "80px" : "40px")}
`

const Button = ({ color, size, text }) => (
    <StyledButton color={color} size={size} > {text} </StyledButton>
);
// title은 h1 요소의 textContent, textColor은 글자색이 되는 props입니다.
// const Button = ({ title, textColor }) => (
//     <h1 style={{ color: textColor }}>{title}</h1>
// );

export default Button;