import { useDispatch, useSelector } from "react-redux";
import { BlueButton } from "./BlueButton";
import { check, next } from "../store/modules/score";
import Progress from "./Progress";
import "./Quiz.css";
import styled from "styled-components";

const CityImg = styled.img`
  width: 100%;
  margin-top: 50px;
`;

export default function Quiz() {
  const dispatch = useDispatch();

  const quizes = useSelector((state) => state.score.quizes);
  const page = useSelector((state) => state.score.page);

  const QUIZ_INDEX = page - 1;
  const QUIZ_QUESTION = quizes[QUIZ_INDEX].q;

  return (
    <>
      <CityImg src={quizes[QUIZ_INDEX].img} alt={QUIZ_QUESTION} />
      <h1 className="quiz-title">{QUIZ_QUESTION}의 수도는?</h1>
      {quizes[QUIZ_INDEX].a.map((item, index) => {
        return (
          <>
            <BlueButton
              text={item.text}
              key={item.text}
              clickEvent={() => {
                dispatch(check({ isCorrect: item.isCorrect }));
                dispatch(next());
              }}
            />
          </>
        );
      })}
      <Progress page={page} maxPage={quizes.length} />
    </>
  );
}
