import { selector } from "recoil";
import { todoListFilterState, todoListState } from "@/atom/atom";

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

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case '01':
        return list.filter((item) => item.isCompleted);
      case '02':
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

