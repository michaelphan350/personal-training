import Navbar from "./components/navbar/Navbar.jsx"
import Workout from "./components/workout-checklist/WorkoutChecklist.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Workout></Workout>
    </div>
  );
}

export default App;
