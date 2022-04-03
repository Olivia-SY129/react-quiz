import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next, reset } from "./store/modules/score";
import styled from "styled-components";
import { BlueButton } from "./components/BlueButton";
import Quiz from "./components/Quiz";

const MainImage = styled.img`
  width: inherit;
  margin: 50px 0 0 0;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 30px;
  margin: auto;
  max-width: 360px;
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 30px;
`;

const SubHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #707276;
  font-weight: 400;
`;

const ScoreDisplay = styled.h1`
  font-size: 50px;
  font-weight: 500;
  color: #c63772;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const quizes = useSelector((state) => state.score.quizes);
  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <Main>
          <MainImage src="/city/main.jpg" alt="메인 서울 사진" />
          <Header>나라 별 수도 퀴즈</Header>
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
      {page > 0 && quizes.length >= page && (
        <Main>
          <Quiz />
        </Main>
      )}
      {quizes.length < page && (
        <Main>
          <Header>당신의 점수는?</Header>
          <ScoreDisplay className="score">{score}점</ScoreDisplay>
          <SubHeader></SubHeader>
          <PinkButton
            text="처음으로"
            clickEvent={() => {
              dispatch(reset());
            }}
          ></PinkButton>
        </Main>
      )}
    </>
  );
}

export default App;
