import { useDispatch, useSelector } from "react-redux";
import { BlueButton } from "./BlueButton";
import { check, next } from "../store/modules/score";
import Progress from "./Progress";
import "./Quiz.css";

export default function Quiz() {
  const dispatch = useDispatch();

  const quizes = useSelector((state) => state.score.quizes);
  const page = useSelector((state) => state.score.page);

  const QUIZ_INDEX = page - 1;

  return (
    <>
      <h1 className="quiz-title">{quizes[QUIZ_INDEX].q}</h1>
      {quizes[QUIZ_INDEX].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              dispatch(check({ isCorrect: item.isCorrect }));
              dispatch(next());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quizes.length} />
    </>
  );
}
