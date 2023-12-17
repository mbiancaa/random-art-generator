import './App.css';
import Canvas from "./components/Canvas";

export default function App() {

  return (
    <div className="App">
      <Canvas columns={5} rows={7}/>
    </div>
  );

}