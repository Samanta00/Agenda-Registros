import React, { ReactComponentElement } from 'react';
import style from './form.module.scss';
import Botao from '../Botao/botao';
import ITarefas from '../../types/tarefa';


class Formulario extends React.Component <{

setTarefas:React.Dispatch<React.SetStateAction <ITarefas[]>>


}>{


  state={
    titulo:"",
    descricao:"",
    hora:"00.00",
    data:"",
    tempo:"00:00"
  }
  
  //Aqui salva os dados do formulario no campo e encaminha para a api e para o campo de agendamento

salvarDados(evento:React.FormEvent<HTMLFormElement>){
  evento.preventDefault()
  this.props.setTarefas(tarefasAntigas =>[...tarefasAntigas,{...this.state}])

this.CadastrarRelatos(this.state)

 this.setState({
  titulo:"",
  descricao:"",
  hora:"00.00",
  data:"",
  tempo:"00:00"
 })

 
}


//a intenção aqui é dar um refresh na api

buscarRegistros=()=>{
  fetch("http://localhost:8083/avisos")
  .then(resposta=>resposta.json())
  .then(dados=>{
    this.setState({agendamento:dados})
  })
}



CadastrarRelatos=(tarefasAntigas:any)=>{
  fetch("http://localhost:8083/avisos",
   {method:'POST' ,
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(tarefasAntigas)
  
 } )
    .then(resposta=>{
      if(resposta.ok){
       console.log('erro')
      }
      else{ 
        this.buscarRegistros();
        alert('Para ver Novos registros na api, salve os dados e recarregue a pagina')
      }
    })


  }
//Aqui envia salva os novos registros na API
  EnviarRegistros=(tarefasAntigas:any)=>{
    fetch("http://localhost:8083/avisos",
     {method:'POST' ,
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(tarefasAntigas)
    
   } )
      .then(resposta=>{
        if(resposta.ok){
          this.buscarRegistros();
        }
        else{
          alert('Houve uma falha ao salvar registro')
        }
      })
  
  
    }

    
EditarDados=()=>{
  console.log('pegou')
}

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.salvarDados.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Titulo
          </label>
          <input
            type="text"
            name="tarefa"
            id="titulo"
            value={this.state.titulo}
            placeholder="Título de uma nova tarefa"
            onChange={evento=>this.setState({...this.state,titulo:evento.target.value})}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Descrição
          </label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            value={this.state.descricao}
            placeholder="Adicione uma descrição"
            onChange={evento=>this.setState({...this.state,descricao:evento.target.value})}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Horario
          </label>
          <input
            type="time"
            name="hora"
            id="hora"
            value={this.state.hora}
            placeholder="Horário da tarefa"
            onChange={evento=>this.setState({...this.state,hora:evento.target.value})}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Data da Tarefa
          </label>
          <input
            name="hora"
            id="hora"
            type="date"
            value={this.state.data}
            placeholder="Qual a data da sua nova tarefa?"
            onChange={evento=>this.setState({...this.state,data:evento.target.value})}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            id="tempo"
            onChange={evento=>this.setState({...this.state,tempo:evento.target.value})}
            min="00:00:00"
            required
          />
        </div>
     
        <Botao/>
       
      </form>
    )
  }
}

export default Formulario;