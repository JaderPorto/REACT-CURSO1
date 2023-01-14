import React,{useState} from "react";

function App() {
  const [valor,setValor] = useState(0);
  const [user, setUser] = useState({
    id:1,
    name:'Jose Antonio',
    photo:'https://svgsilh.com/svg/311670-795548.svg',
  })

  function Funcaumentar(){
    setValor(valor + 1);
  }

  function FuncDiminuir(){
    setValor(valor -1);
  }
    
  return (  

    <div>
         <div>Quantidade de Produtos no carrinho:  <b>{valor}</b></div>  
         <button onClick={FuncDiminuir}> Remover + 1 no carrinho</button> 
         <button onClick={Funcaumentar}> aumentar + 1 no carrinho</button> 

         <hr/>

         Nome do usuario: <b>{user.name}</b><br />
         <img src={user.photo}/>
    </div>
  );
}

export default App;
