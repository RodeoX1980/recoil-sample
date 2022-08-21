import { todoListState } from "@/atom/atom";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

const TodoItemCreator = () => {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const addItem = () => {
    if (title === '') return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isCompleted: false,
      },
    ]);
    setTitle('');
  }

  return (
    <div style={{ margin: '1em 0' }}>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;

let id = 1;
const getId = () => {
  return id++;
}

