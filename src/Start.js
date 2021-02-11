export default function Start(props) {
  return (
    <button onClick={() => props.getDateTime('start')}>Start</button>
  )
}