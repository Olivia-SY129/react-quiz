import {} from "redux";

const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

export function check({ quizIndex, answerIndex }) {
  return {
    type: CHECK_CORRECT,
    payload: { quizIndex, answerIndex },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

const initState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1~quizes.length: 퀴즈 페이지, quizes.length+1: 마지막 페이지
  quizes: [
    {
      q: "대한민국 수도",
      a: [
        {
          text: "서울",
          isCorrect: true,
        },
        {
          text: "수원",
          isCorrect: false,
        },
        {
          text: "인천",
          isCorrect: false,
        },
      ],
    },
  ],
};

export default function score(state = initState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: state.quizes[action.payload.quizIndex].a[
          action.payload.answerIndex
        ].isCorrect
          ? state.score + 1
          : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return { ...state };
  }
}
