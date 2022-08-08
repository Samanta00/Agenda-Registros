
import Item from './item';
import style from './lista.module.scss';
import ITarefas from '../../types/tarefa';


function Lista({tarefas}:{tarefas: ITarefas[]}) {

  return (
    <aside className={style.listaTarefas}>
      <h2 > Agendamentos </h2>
      <ul>
    
{tarefas.map((item,index)=>(
    <Item  key={index}  {...item}  />
))}

      </ul>
    </aside>
  )

}

export default Lista;