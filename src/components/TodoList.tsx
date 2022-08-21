import { useRecoilValue } from "recoil";

import { todoListState } from "@/atom/atom";
import TodoListStats from "@/components/TodoListStats";
import TodoItemCreator from "@/components/TodoItemCreator";
import TodoItem from "@/components/TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1>Todolist</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem id={item.id} title={item.title} />
      ))}
    </>
  )
};

export default TodoList;
