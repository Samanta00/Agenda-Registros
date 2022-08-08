import React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component <{
  type?:"button" | "submit" | "reset" | undefined
}>
{
  render() {
    return (
      <button type='submit' className={style.botao}>
        Enviar
      </button>
    )
  }
}

export default Botao;