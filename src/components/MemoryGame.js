import React,{useState,useEffect} from 'react'
import "./memorygame.css"
import SingleCard from "./SingleCard"
const cardImages=[
    {"src":"img/1.png",matched:false},
    {"src":"img/2.png",matched:false},
    {"src":"img/3.png",matched:false},
    {"src":"img/4.png",matched:false},
    {"src":"img/5.png",matched:false},
    {"src":"img/6.png",matched:false},
]
const Memoryfood = () => {
const[cards,setCards]=useState([])
const[turns,setTurns]=useState(0)
const [choiceOne,setChoiceOne]=useState(null)
const [choiceTWo,setChoiceTWo]=useState(null)

    //shufflecards
const shuffleCards=()=>{
    const shuffleCards=[...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))
    setCards(shuffleCards)
    setTurns(0)
}
console.log(turns);


//handle a choice
const handleChoice=(card)=>{
   choiceOne ?setChoiceTWo(card):setChoiceOne(card)
}
//compare two selected cards
useEffect(() => {
if (choiceOne && choiceTWo){
    if (choiceOne.src===choiceTWo.src){
        setCards(prevCards=>{
            return prevCards.map(card=>{
             if(card.src===choiceOne.src){
                 return {...card,matched:true}
             }   else{
                 return card
             }
            })
        })
        resetTurn()
    }
    else {
      setTimeout(()=>resetTurn(),1000)  
    }
}
},[choiceOne,choiceTWo])


//reset choice & increase turn 
const resetTurn = ()=>{
    setChoiceOne(null);
    setChoiceTWo(null);
    setTurns(prevTurns=>prevTurns+1);
}

    return (
<div className="page-game">
    <div className="gameheader">
    <h5>Food Memory Game - your Turns ({turns}) </h5>
<input onClick={shuffleCards} value="start New Game" type="button" className="btngame"/>
</div>
<div className="foodmemoryapp">
<div className="card-grid">
{cards.map(card=>(
<SingleCard key={card.id}
 handleChoice={handleChoice} 
card={card} 
flipped={card===choiceOne||card===choiceTWo||card.matched}
/>
))}
</div>
</div>
</div>
    )
}
    export default Memoryfood