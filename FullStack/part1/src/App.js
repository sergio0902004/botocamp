import './App.css';
import Msg from './Mensaje';
const Description = () => {
return <p>Esta es una breve descripcion para morir</p>
}
const App=()=> {
  return (
    <div className="App">
      <Msg color="red" message="Trabajare duro"/>
      <Msg color="blue" message="Para servir" />
      <Msg color="skyblue" message="Todos"/>
      <Description/>
    </div>
  );
}

export default App;
