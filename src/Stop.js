export default function Stop(props) {
  return (
    <button onClick={() => {
      props.getDateTime('stop'); 
      // props.parseTime();
    }}>Stop</button>
  )
}