import { selector } from "recoil";
import { todoListState } from "@/atom/atom";

export const todoListStateSelector = selector({
  key: "todoListStateSelector",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  }
})


