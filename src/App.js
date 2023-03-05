import Navbar from "./components/navbar/Navbar.jsx"
import Workout from "./components/workout-checklist/WorkoutChecklist.jsx"
import './App.css';
import PrintButton from './components/navbar/PrintButton'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PrintButton></PrintButton>
      <Workout></Workout>

    </div>
  );
}

export default App;
