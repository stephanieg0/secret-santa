import './App.css';
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
				<h1>Hello World!</h1>
				<Link to='/items'>Got to Items</Link>
      </header>
    </div>
  );
}
