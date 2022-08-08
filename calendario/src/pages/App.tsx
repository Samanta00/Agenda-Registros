import React, {useState} from 'react';
import Formulario from '../compents/Formulario/index';
import Lista from '../compents/Lista/lista';
import Pesquisa from '../Pesquisa/Pesquisa';
import ITarefas from '../types/tarefa';
import style from './App.module.scss';



function App() {
  const [tarefas,setTarefas]=useState<ITarefas[] | []> ([])

  return (
    <div className={style.AppStyle}>
   <Formulario setTarefas={setTarefas}/>

   <Lista tarefas={tarefas}/>
   <Pesquisa/>
    </div>
  );
}

export default App;
