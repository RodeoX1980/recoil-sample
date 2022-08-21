import { todoListState } from "@/atom/atom";
import { Todo } from "@/types/todo";
import { useRecoilState } from "recoil";

type Props = {
  item: Todo;
}

const TodoItem = ({ item }: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...item, isCompleted: !item.isCompleted },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  }

  return (
    <div>
      <button onClick={toggleItemCompletion}>
        {item.isCompleted ? '完' : '未'}
      </button>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: "pointer" }}>X</span>
    </div>
  );
}

export default TodoItem;
