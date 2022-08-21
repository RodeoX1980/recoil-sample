import { todoListState } from "@/atom/atom";
import { useRecoilState } from "recoil";

type Props = {
  id: number;
  title: string;
}

const TodoItem = ({ id, title }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <div key={id}>
      {title}
      <span onClick={deleteItem} style={{ cursor: "pointer" }}>X</span>
    </div>
  );
}

export default TodoItem;
