import './App.css' 
import Evento from "./assets/componentes/Evento"
import Galeria from './assets/componentes/Galeria'
import Cabecalho from './assets/componentes/Cabecalho'
import Rodape from './assets/componentes/Rodape'

 function App() {

  return (
    <>
     <Cabecalho />
    <Evento
      titulo={"Dia da familia"}
      descricao={"descricao do evento"}
      horario={"30/04 9h até 21h"}
      local={"Senai"}
    />
    <Galeria />
    <Rodape />
  </>
  )
 }
export default App
