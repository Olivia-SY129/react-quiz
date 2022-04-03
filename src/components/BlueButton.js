import styled from "styled-components";

// button 태그는 디폴트로 submit 이기 때문에 a 태그를 선호할 수도 있다.
const MyButton = styled.a`
  position: relative;
  display: block;
  margin-bottom: 30px;
  cursor: pointer;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  line-height: 1.6;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  padding: 1.8em;
  background: #fff;
  color: #382b22;
  border: 2px solid #8599b1;
  border-radius: 0.75em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: 0.15s ease-out;
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
    background: #c4d8f9;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #8599b1, 0 0.625em 0 0 #e2efff;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
  }
  &:hover {
    transform: translateY(0.25em);
    &::before {
      transform: translate3d(0, 0.5em, -1em);
    }
  }
`;

export function BlueButton({ text, clickEvent }) {
  return <MyButton onClick={clickEvent}>{text}</MyButton>;
}
