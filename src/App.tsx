import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import TodoList from '@/components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: '2em' }}>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  )
}

export default App
