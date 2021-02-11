export default function Stop(props) {
  return (
    <button onClick={() => props.getDateTime('stop')}>Stop</button>
  )
}