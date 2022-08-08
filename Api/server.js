
import app from "./src/app.js"
const porta= process.env.PORT || 8083

//ou a porta vai pro caminho de ambiente de produção ou vai pro caminho 3000 localhost






// const server=http.createServer((req,res)=>{
//     //content-type estou explicando que vai devolver um tipo texto
//     res.writeHead(200,{'Content-type': 'text/plain'})
//     //res devolver um cabeçado no padrao 200 e retornar um texto
//     res.env(rotas[req.url]) //vai enviar e entrar em rotas  pegar o primeiro indice que vai retornar uma url
//     //e vai devolver um texto no final

// })

//no final eu chamo a constante server e escuto ela e coloco qual é a porta que ela será escutada
app.listen(porta,()=>{
    console.log(`servidor está escutando em : localhost:http://localhost:${porta}`)
})
