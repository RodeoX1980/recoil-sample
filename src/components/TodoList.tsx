import { useRecoilState, useRecoilValue } from "recoil";

import { todoListState } from "@/atom/atom";
import TodoListStats from "@/components/TodoListStats";
import TodoItemCreator from "@/components/TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>Todolist</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
};

export default TodoList;
