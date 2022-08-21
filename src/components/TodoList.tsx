import { useRecoilState, useRecoilValue } from "recoil";

import { todoListFilterState } from "@/atom/atom";
import TodoListStats from "@/components/TodoListStats";
import TodoItemCreator from "@/components/TodoItemCreator";
import { filteredTodoListState } from "@/atom/selector";
import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todo";
import { ChangeEvent } from "react";
import TodoListFilter from "./TodoListFilter";

const TodoList = () => {
  const todoList: Todo[] = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h1>Todolist</h1>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  )
};

export default TodoList;
