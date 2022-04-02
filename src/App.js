import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next } from "./store/modules/score";
import styled from "styled-components";
import { BlueButton } from "./components/BlueButton";

const MainImage = styled.img`
  width: inherit;
  margin: 30px 0 30px 0;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 30px;
  margin: auto;
  max-width: 360px;
  text-align: center;
`;

const SubHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #707276;
  font-weight: 400;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <Main>
          <MainImage src="/city/main.jpg" alt="메인 서울 사진" />
          <h1>나라 별 수도 퀴즈</h1>
          <SubHeader>수도 고인물이 되어보자!</SubHeader>
          <PinkButton
            text="테스트 시작!"
            clickEvent={() => {
              dispatch(next());
            }}
          />
          <BlueButton text="제작자 블로그 방문" />
        </Main>
      )}
    </>
  );
}

export default App;
