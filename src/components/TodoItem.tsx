
type Props = {
  id: number;
  title: string;
}

const TodoItem = ({ id, title }: Props) => {
  return <div key={id}>{title}</div>;
}

export default TodoItem;
