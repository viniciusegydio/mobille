import { useState } from 'react'

import Botao from './componentes/Botao'

function App() {
  
  const[valor,setValor]= useState(0)
  const[valor2,setValor2]= useState(0)
  const [resultado, setResultado] = useState(0);
 
  return (
    <>

      <input     
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        
      />
      <input     
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        
      />
      
      <Botao nome="+" var1={valor} var2={valor2} setResultado={setResultado}/> 
      <Botao nome = "-"var1={valor} var2={valor2} setResultado={setResultado}/>  
      <Botao nome = "X"var1={valor} var2={valor2} setResultado={setResultado}/>  
      <Botao nome = "/"var1={valor} var2={valor2} setResultado={setResultado}/>  
      <Botao nome = "zerar"var1={valor} var2={valor2} setValor={setValor}setValor2={setValor2}/>  
      <br></br>
      <p>Resultado: {resultado}</p>
    </>
  )
}

export default App
