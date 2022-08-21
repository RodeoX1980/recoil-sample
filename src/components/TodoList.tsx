import { useRecoilValue } from "recoil";

import { todoListState } from "@/atom/atom";
import TodoListStats from "@/components/TodoListStats";
import TodoItemCreator from "@/components/TodoItemCreator";
import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todo";

const TodoList = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);

  return (
    <>
      <h1>Todolist</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </>
  )
};

export default TodoList;
