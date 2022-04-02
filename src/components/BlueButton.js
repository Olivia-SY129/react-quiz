import styled from "styled-components";

// button 태그는 디폴트로 submit 이기 때문에 a 태그를 선호할 수도 있다.
const MyButton = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  color: #382b22;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  user-select: none;
  transform-style: preserve-3d;
  transition: 0.15s ease-out;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    background: #ffe9e9;
    transform: translateY(0.25em);
    &::before {
      transform: translate3d(0, 0.5em, -1em);
    }
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
