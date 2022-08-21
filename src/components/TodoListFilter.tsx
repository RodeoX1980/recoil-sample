import { todoListFilterState } from "@/atom/atom"
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil"

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  }

  return (
    <>
      <select value={filter} onChange={handleChange}>
        <option value="00">全て</option>
        <option value="01">完了</option>
        <option value="02">未完了</option>
      </select>
    </>
  );
};

export default TodoListFilter;

