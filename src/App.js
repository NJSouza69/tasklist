import './App.css';
import Navbar from './components/Navbar/navbar';
import TaskList from './components/Tasklist/tasklist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <TaskList title="Pendente"  />
        <TaskList title="Andamento" />
        <TaskList title="Concluído" />
      </div>
    </div>
  );
}

export default App;
