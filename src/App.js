import Content from "./components/Content";
import Header from "./components/Header";
import './style.css'

function App() {
  return (
    <div className="App">
      <Header name="Eccomerce System" follow="Follow us"></Header>
      <Content event="Black Friday!" copy="COMPRE EM SUA CASA" description={`Se inscreva para ficar por dentro de nossos produtos\n\ne ofertas imperdiveis`}></Content>
    </div>
  );
}

export default App;
