export default function CounterLiftingStateUp({ count, increment }) {
  return (
    <button onClick={increment}>
      Button clicked {count} times!!!
    </button>
  )
}
