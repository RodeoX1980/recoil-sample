import { todoListStateSelector } from "@/atom/selector"
import { useRecoilValue } from "recoil"

const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStateSelector);
  return (
    <ul>
      <li>Todo登録数: {totalNum}</li>
    </ul>
  )
}

export default TodoListStats;
