import logo from './logo.svg';
import './App.css';

function Kartu(props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="andri" nama="1841720157" />
      <Kartu nim="yoga" nama="1841720157" />
      <Kartu nim="susila" nama="1841720157" />
    </div>
  );
}

export default App;