import './App.css';
import CreateMovie from './components/CreateMovie';
import DeleteMovie from './components/DeleteMovie';
import UpdateMovie from './components/UpdateMovie';
import GetMovie    from './components/GetMovie';

// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
function App() {
  return (
    <div className="App">
      <CreateMovie />
      <GetMovie    />
      <UpdateMovie />
      <DeleteMovie />
    </div>
  );
}
export default App;