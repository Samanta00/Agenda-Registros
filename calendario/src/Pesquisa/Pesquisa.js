




import React, { Component, useEffect, useState } from 'react';
import style from "./pesquisa.module.scss"
import api from '../server/Api.Axios.js';





//Rascunho Para Filtro de Busca

// export function Teste(valor){

// // const [evento,setState]=setState('');

// console.log(valor)

//   // fetch("http://localhost:8083/avisos")
//   // .then(resposta=>resposta.json())
//   // .then(dados=>{

    
//         this.valor

//         console.log(this.valor)

//         // console.log(this.setState)
//     // fetch(`http://localhost:8083/avisos/anime?filter[valor]=cowboy%20bebop`)
 
//   }








class Pesquisa extends Component {


  constructor(props){
    super(props);

    this.state={agendamento:[]}
   


    // const agendamentosFiltrados=agendamento.filter((agendamento)=>agendamento.startWith(busca))

  }
  
   
   componentDidMount(){
     this.buscarRegistros()
}

buscarRegistros=(valor)=>{
  fetch("http://localhost:8083/avisos")
  .then(resposta=>resposta.json())
  .then(dados=>{

    
        this.setState({agendamento:dados})
    
  
  })
}


    deletarRegistros=(id)=>{
 fetch("http://localhost:8083/avisos/"+id,{method:'DELETE'})
 .then(resposta=>{
   if(resposta.ok){
     this.buscarRegistros()
   }
 })
    
}

AtualizarRegistros=(id)=>{
  console.log('pegou')
  console.log(id)
}



//Rascunho de uma atualização na api e edição de dados

// app(valor){

// useEffect(()=>{
//   if(valor){
//       fetch(`${api}anime?filter[valor]=${valor}`)
//       .then((resposta)=>resposta.json())
//       .then((resposta)=>{
//         console.log(resposta)
//       })
//   }
// })


// // fetch(`http://localhost:8083/avisos/anime?filter[valor]=cowboy%20bebop`)


    
  
  
// }




      render() {
       
        return (

        <div>
                    <h1 className={style.titulo}>Encontrar Agendamento</h1>
                    
         

                    <div className={style.itens}>
                          <div className={style.acoes}>

          {/* Por tentativas está como rascunho o escopo de um filtro */}

                                {/* <input type="text" placeholder='Titulo de agendamento' className={style.input} name="tempo" onChange={(evento)=>Teste(evento.target.value)}  id="tempo"
                              
                                

                                /> */}
                                {/* <button className={style.botao} >Pesquisar</button> */}
                    </div>

                    </div>

     
               
           {this.state.agendamento.map((agendamento)=>


               <table className={style.tabela}>

                      <thead>
                        <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Horário</th>
                        <th>Data</th>
                        <th>Tempo</th>
                        <th>Opções</th>
                  
                        </tr>

                      <tr>
                        <td>{agendamento.titulo}</td>
                        <td>{agendamento.descricao}</td>
                        <td>{agendamento.hora}</td>
                        <td>{agendamento.data}</td>
                        <td>{agendamento.tempo}</td>
                        <td> 
                         <button type="button" id={style.deletar} className={style.opcoes} onClick={()=> this.deletarRegistros(agendamento.id)} >Deletar</button> </td>
                      </tr>   

{/* botão ja formatado caso haja um código para filtrar dados da api, só encaixar o botão no td ao lado do botão de deletar */}
{/* <button type="button" id={style.editar} className={style.opcoes}  onClick={()=> this.AtualizarRegistros(agendamento.id) }  >Editar</button> */}
                      </thead>


  

                 </table>






           )}
          

        </div>

        )
      }
    }

    
    export default Pesquisa;
   