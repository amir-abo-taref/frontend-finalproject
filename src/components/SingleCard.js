import './SingleCard.css'
export default function SingleCard({card ,handleChoice,flipped}) {
    const handleClick=()=>{
        handleChoice(card)
    }
    return (
 <div  className="cardgame"  > 
 <div className={flipped?"flipped":""}>
<img className="front" src={card.src} alt="card front"/>
<img className="back" src={"/img/foodingredients.jpg"} onClick={handleClick} alt="card back" />
</div>
</div>  
    )
}
