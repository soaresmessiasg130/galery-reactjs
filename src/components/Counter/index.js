import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(state => state + 1)
  }

  return (
    <button onClick={increment}>
      Button clicked {count} times!!!
    </button>
  )
}
