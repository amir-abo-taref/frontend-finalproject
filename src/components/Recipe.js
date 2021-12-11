import React, { useEffect, useState} from 'react';
import "./Recipe.css";
import axios from "axios";

const RecipeApp = () => {
    const [meal, setMeal] = useState([]);
    const [recipe,setRecipe]=useState({
        name:'',
        image:'',
        caloriot:'',
        time:'',
        info:'',
        })

        const inputHandler = (e)=>{
            setRecipe({
            ...recipe,
            [e.target.id]:e.target.value,
        })
        }

        useEffect(() => {
            const getData = async () => {
                await axios.get("https://backend-finalproject-ameer.herokuapp.com/recipe")
                    .then(res => {
                        setMeal(res.data);
                        setRecipe(res.data);
                    });
            };
            getData();
        }, []);
        const postData = async() => {
            await axios.post("https://backend-finalproject-ameer.herokuapp.com/recipe",recipe)
                .then(res => {
                    setMeal([...recipe,res.data]);
                    setRecipe(res.data);
                });
        };

        return (
            <div className="recipe-page">
                <div className="input-recipe">
                    <div className="recipe-header1">
<div className="recipe-text"> your food name</div>
<input className="recipe-inputbtn" type="text" min="0" name="name" id="id" value={recipe.name} onChange={inputHandler} placeholder="Food name" />
<div className="recipe-text">your food image</div>
<input className="recipe-inputbtn" type="url" min="0" name="img" id="id" value={recipe.image} onChange={inputHandler} placeholder="Food image-(url)" />
<div className="recipe-text">your food caloriot</div>
<input className="recipe-inputbtn" type="number" min="0" name="caloriot" id="id" value={recipe.caloriot} onChange={inputHandler} placeholder="caloriot" />
<div className="recipe-text">time to make</div>
<input className="recipe-inputbtn" type="number" min="0" name="time" id="id" value={recipe.time} onChange={inputHandler} placeholder="time" />
<div className="recipe-text">click here to add your recipe</div>
<input className="recipe-btn" type="button" name="add food" id="id" value="add Your Food" onClick={postData}  />
</div>
<div className="recipe-header2">
<div className="recipe-text">Tap here how to make your food </div>
<textarea className="descriptions" value={recipe.info} id="id" name="descriptions" rows="6" cols="26" onChange={inputHandler}  placeholder="click here to add your ingredients "/>
</div>
</div>
      <div className="allrecipecards">
         {meal.map((e) => {
           return (
          <div className="recipecards" key={e._id}>
          <img className="recipefood-img" src={e.image} alt="food-img" />
          <div className="recipeinfo">
          <div className="recipeheader" >{e.name}</div>
          <div className="recipetext">calories:({e.caloriot})grams</div>
          <div className="recipetext">Time:({e.time})mins</div>
          <div className="overlay">
          <div className="recipetextinfo"><div className="infoingtext">Ingredients</div>({e.info})</div> 
          </div>
          </div>
</div>
        )
          })}
          </div>
          </div>
        )  
}

export default RecipeApp;
