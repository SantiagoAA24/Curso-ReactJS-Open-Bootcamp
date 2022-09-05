import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Santiago"></Greeting> */}
        {/* Componente funcional */}
        {/* <GreetingF name="Santiago"></GreetingF> */}
        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
