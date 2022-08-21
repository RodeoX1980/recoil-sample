import { todoListStateSelector } from "@/atom/selector"
import { useRecoilValue } from "recoil"

const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStateSelector);
  return (
    <ul>
      <li>Todo登録数: {totalNum.totalNum}</li>
      <li>完了数:   {totalNum.totalCompletedNum}</li>
      <li>未完了数: {totalNum.totalUncompletedNum}</li>
    </ul>
  )
}

export default TodoListStats;
