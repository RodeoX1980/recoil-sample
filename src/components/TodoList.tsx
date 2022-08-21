import { todoListState } from "@/atom/atom";
import { useRecoilValue } from "recoil";
import TodoListStats from "@/components/TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <h1>Todolist</h1>
      <TodoListStats />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
};

export default TodoList;
