import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: 0,
      title: 'メール送信',
      isCompleted: false,
    }
  ]
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: '00'
});
