import { selector } from "recoil";
import { todoListState } from "@/atom/atom";

type counts = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
}


export const todoListStateSelector = selector({
  key: "todoListStateSelector",
  get: ({ get }): counts => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    return {
      totalNum: totalNum,
      totalCompletedNum: totalCompletedNum,
      totalUncompletedNum: totalUncompletedNum
    };
  }
})


