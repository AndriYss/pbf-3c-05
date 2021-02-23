import logo from './logo.svg';
import './App.css';

function Komentar(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

function App() {
  let me = { name: "Andri Yoga Susila", avatarUrl: logo }
  return (
    <div>
      <Komentar text="Selesai dan Nim saya 1841720157" date="23 Februari 2021" author={me} />
    </div>
  );
}

export default App;