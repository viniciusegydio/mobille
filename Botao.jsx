
import { useState } from 'react'

export default function Botao (props){
   
  

    function handleOnClickSoma(nome) {

    const num1 = Number(props.var1)
    const num2 = Number(props.var2)
    let resultadoCalculado = 0;
  
      if (nome === "+"){
        resultadoCalculado = num1 + num2;
      } 
      if (nome === "-"){
        resultadoCalculado = num1 - num2;
      }
      if (nome === "X"){
        resultadoCalculado = num1 * num2;
      }
      if (nome === "/"){ 
        resultadoCalculado = num1/ num2;
        }
      if(nome ==="zerar"){
        props.setValor(0);
        props.setValor2(0);
      }
      props.setResultado(resultadoCalculado);
    }
         
 return (   
    <>
    

            
        <button onClick={() => handleOnClickSoma(props.nome)}> {props.nome}</button>
        
        
    
    </>
 );

}