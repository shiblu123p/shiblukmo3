import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { Appbar } from './components/Appbar';
import { StateBasis } from './components/StateBasis';
import { Counter } from './components/Counter';
import { UseE } from './components/UseE';
import { Mapping } from './components/Mapping';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Registration/> */}
      <Appbar></Appbar>
      {/* <StateBasis></StateBasis> */}
      {/* <Counter></Counter> */}
      {/* <UseE></UseE> */}
      <Mapping></Mapping>
       </div>
  );
}

export default App;
