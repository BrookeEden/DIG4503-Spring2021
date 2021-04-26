import CreateBook from './components/CreateBook';
import DeleteBook from './components/DeleteBook';
import GetBook from './components/GetBook';
// LOOK AT SCREENSHOTS FROM CLASS & NOTES!!
function App() {
  return (
    <div className="App">
      <CreateBook />
        <br/>
        <br/>
        <br/>
      <GetBook />
        <br/>
        <br/>
        <br/>
      <DeleteBook />
    </div>
  );
}
export default App;