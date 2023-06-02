import './TicTactoe.css';
import React, {useState, useEffect} from 'react';


function TicTactoe() {

  

  const emptyBoard = Array(9).fill("");

  const[board, setBoard ] = useState(emptyBoard);
  const[jogadorAtual, setJogadorAtual] = useState("O");
  const[vitoria, setVitoria] = useState(null);

  const aleatorioClick = (index)=> {
    if(board[index] !== ""){ 
      alert("Posição já ocupada")
      return null;}

      if(vitoria){ 
        alert("Jogo Finalizado")
        return null ;}
  


    setBoard(board.map((item, itemIndex)=> itemIndex === index? jogadorAtual: item));

    setJogadorAtual(jogadorAtual ==="X" ? "O": "X") 
  }

const checarVitoria = () => {
  const posicoesVitorias =[
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],

    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],

    [board[2], board[4], board[6]],
    [board[0], board[4], board[8]],
  ];

  posicoesVitorias.forEach(cells => {
    if (cells.every(cell => cell ==="O")) 
    setVitoria("O")
      else if (cells.every(cell => cell ==="X")) 
      setVitoria("X")
    
  });
  
  checarEmpate()

}

const checarEmpate = () => {
  if (board.every (item => item !== "")){
    setVitoria("E")
  }
 }

useEffect(checarVitoria,[board]);

const resetGame =() =>{

  setJogadorAtual("O");
  setBoard(emptyBoard);
  setVitoria(null);


  }
  
  return (
    <main>
      <h1 className='title'>Jogo da Velha</h1>

    <div className={ `board ${ vitoria ? "game-over" : "" }`}> 
    {board.map((item, index ) => (

        <div 
        key={index} 
        className={`cell ${item}`}
        onClick={() => aleatorioClick(index)}
        >
          {item}
          </div>
    
    ))}


    </div>
      {vitoria && 
        <footer>
          {vitoria === "E"?
          <h2 className='vitoria-mensagem'>
          <span className={vitoria}>  Empatou! </span> 
          </h2>
          :         
          <h2 className='vitoria-mensagem'>
            <span className={vitoria}> {vitoria}  </span> Venceu!
            </h2>
          }
            <button className='reiniciar' onClick={resetGame}>Reniciar Jogo!</button>
           
        </footer>
      }

    </main>
    
  )

}
export default TicTactoe;
