import "./Diet.css";
import React, { useEffect,useState } from 'react'
import axios from "axios";
import dietclip from "./pexels-olia-danilevich-9001893.mp4";

const Dietserver = () => {
  const [weight, updateWeightValue] = useState("");
  const [height, updateHeightValue] = useState("");
  const [bmiValue, updateBMIValue] = useState(null);
  const [diet, setAllDiet] = React.useState([]);

  function calculateBMIValue() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedOffBMIValue = bmiValue.toFixed(2);
    updateBMIValue(roundedOffBMIValue);
  }
  function handleWeightInputChange(e) {
    updateWeightValue(e.target.value);
  }
  function handleHeightInputChange(e) {
    updateHeightValue(e.target.value);
  }
  function displayBMIValue() {
    if (bmiValue >= 18.5 && bmiValue <= 24.99) {
      return <div className="good">"You are in a healthy weight range"</div>;
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return <div className="madiom"> "You are over weight"</div>;
    } else if (bmiValue >= 30) {
      return <div className="bad"> "You are obese"</div>;
    }
  }
      useEffect(() => {
        ( async() =>{
            await axios.get('https://backend-finalproject-ameer.herokuapp.com/diet').then(res =>{
                setAllDiet(res.data)
            })
        } )()
 
    }, [])


	return (
        <div className="Deit-page">   
	<section className="first-header">
  <video
        autoplay={`autoPlay`}
        loop={"loop"}
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "28.8%",
          height: "40%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "0",
        }}
      >
        <source src={dietclip} type="video/mp4" />
      </video>
            <div className="dietcontainer">
            {diet.map((e) => {
                return (
                    
              <div className="dietcards" key={e._id}>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
<img className="dietfood-img" src={e.image} alt="food-img" />
</div>
<div class="flip-card-back">
                <div className="textheader" >{e.name}</div>
                <div className="text">calories:({e.caloriot})gram</div>
                <div className="text">Time:({e.time})min</div>
                <div className="smallpiccontainer">
                <img className="small-dietfood-img" src={e.ingredients1} alt="food-img" />
                <img className="small-dietfood-img" src={e.ingredients2} alt="food-img" />
                <img className="small-dietfood-img" src={e.ingredients3} alt="food-img" />
                <img className="small-dietfood-img" src={e.ingredients4} alt="food-img" />
                </div>
                </div>
                </div>
                </div>
                </div>
                )
            })}
                </div>
    </section>
     <div className="container form-container">
      <div>
        <label className="headertextwigth">Enter your Weight in kgs:</label>
        <br />

        <input
          className="textbmi"
          type="text"
          value={weight}
          onChange={handleWeightInputChange}
        ></input>
      </div>
      <div>
        <label className="headertextwigth">Enter your Height in cms:</label>
        <br />
        <input
          className="textbmi"
          type="text"
          value={height}
          onChange={handleHeightInputChange}
        ></input>
      </div>
      <input
        type="button"
        className="dietbtn headertextwigth"
        onClick={() => {
          calculateBMIValue();
        }}
        value=" Calculate BMI"
     />
      <div className="headertextwigth"> Bmi value is : {bmiValue}</div>

      <div className="mt-">{displayBMIValue()}</div>
    </div>
     </div>
	);
   
}
  export default Dietserver;
  