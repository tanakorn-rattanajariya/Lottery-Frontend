import { API } from "../actions/type";
import Super from "./super";
const initialState = {
  resultList: [
    { number: "000000", type: "BIGPRIZE", description: "รางวัลที่ 1" },
    { number: "555", type: "THREEFIRST", description: "รางวัลเลขหน้า 3 ตัว" },
    { number: "333", type: "THREELAST", description: "รางวัลเลขท้าย 3 ตัว" },
    { number: "01", type: "TWOLAST", description: "รางวัลเลขท้าย 2 ตัว" },
  ],
  dashboard: {
    top1: parseInt(Math.random() * 100),
    top2: parseInt(Math.random() * 100),
    top3: parseInt(Math.random() * 100),
    top4: parseInt(Math.random() * 100),
  },
};
export default function deepmap(state = initialState, action) {
  const reducer = new Super({ state, action });
  switch (action.type) {
    default:
      return reducer.observe();
  }
}
