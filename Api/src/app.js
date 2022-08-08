import  express  from "express";
// import sequelize from "../banco";
import cors from "cors"

const app=express();



app.use(express.json())

app.use((req,res,next)=>{
    console.log('Acessou o Middleware')
    res.header("Access-Control-Allow-Origin",'*')
    app.use(cors());
    next();
})

const avisos=[
    {id:1, "titulo":"correr ", "descricao":"no parque da cidade", "horario":"17.30","data":"17/12/2022","tempo":"1.00.30"},
    {id:2, "titulo":"dormir ", "descricao":"preciso acordar cedo", "horario":"20.00","data":"05/08/2022","tempo":"5.08.15"},
    {id:3, "titulo":"estudar ", "descricao":"React Nativr", "horario":"13.50","data":"18/12/2022","tempo":"1.00.30"},
    {id:4, "titulo":"ir para escola ", "descricao":"preciso dormir cedo", "horario":"05.00","data":"05/08/2022","tempo":"10.08.15"}

]
//como nao estou passando caminho de porta por padrão vai cair na 3000
app.get('/',(req,res)=>{
    res.status(200).send('Calendario de avisos');
//vai retornar nessa porta o envio do texto livraria


})
app.get('/avisos',(req,res)=>{
    res.status(200).json(avisos)
    //vai cair na porta um arquivo json com os objetos de avisos
})

app.get('./avisos:id',(req,res)=>{
    let indice=BuscaLivros(req.params.id)
    res.json(avisos[indice])
})


app.post('/avisos',(req,res)=>{
    avisos.push(req.body)
    res.status(201).sendStatus('foi enviado com sucesso')
    //o metodo post cadastra um novo registro, ele vai fazer uma função e nessa função vai puchar um elemento pra dentro do array que será o elemento
    //do corpo da requisição que é o req.body
})

app.put('./avisos:id',(req,res)=>{
    let indice=BuscaLivros(req.params.id)
    avisos[indice].titulo= req.body.titulo
    //no final ele pega o indice de titulo entra no objeto titulo e muda para qual o corpo da requisição está passando
    //corpo da requisição==url
    res.json(avisos)
})


app.delete('/avisos/:id',(req,res)=>{
    let {id}=req.params
    let indice=BuscaLivros(id)
    avisos.splice(indice,1)
    
    res.send(`Aviso: ${id} foi apagado com sucesso.`)
    
    
})

function BuscaLivros(id){
    return avisos.findIndex(avisos => avisos.id==id)
    //o indice de livros vai retornar uma função que vai comparar se são iguais o id do livro com o id que o parametro da função está passando
}

export default app