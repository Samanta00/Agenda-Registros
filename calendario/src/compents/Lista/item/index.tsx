import style from "../lista.module.scss"


export default function Item({titulo,descricao,hora,data,tempo}:{titulo:string,descricao:string,hora:string,data:string,tempo:string}){

    return(
        <li className={style.item}>
            <h3>{titulo}</h3>
            <h5>{descricao}</h5>
            <h5>{hora}</h5>
            <h5>{data}</h5>
            <span>{tempo}</span>
        </li>
    )
}

