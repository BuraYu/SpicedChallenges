import "./styles.css";

export default function App() {
  return <Greeting name="Burak" />;
}

function Greeting(props) {
  return <h1>Hallo, {props.name}</h1>;
}
