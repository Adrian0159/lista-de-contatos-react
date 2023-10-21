import { Container } from "./styles";
import EstliloGlobal from "./styles";
import ListaDeContatos from "./containers/ListaDeContatos";
import Barralateral from "./containers/BarraLateral";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstliloGlobal />
      <Container>
        <Barralateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
