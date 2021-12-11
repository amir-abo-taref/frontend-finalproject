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
            [e.target.name]:e.target.value,
        })
        }

        // useEffect(() => {
        //     const postData = async () => {
        //     axios.post('https://backend-finalproject-ameer.herokuapp.com/recipe', recipe)
        //         .then(response => setRecipe(response.data));
        //     }
        
        // // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);

        useEffect(() => {
            const getData = async () => {
                await axios.get("https://backend-finalproject-ameer.herokuapp.com/recipe")
                    .then(res => {
                        setMeal(res.data);
                    });
            };
            getData();
        }, []);

        const postdata = async () => {
            await axios.post("https://backend-finalproject-ameer.herokuapp.com/recipe",recipe)
                .then(res => {
                    setRecipe(res.data);
                    setMeal([...meal,res.data])
                });
        };
     

        return (
            <div className="recipe-page">
                <div className="input-recipe">
                    <div className="recipe-header1">
<div className="recipe-text"> your food name</div>
<input className="recipe-inputbtn" type="text"  name="name" value={recipe.name} onChange={inputHandler} placeholder="Food name" />
<div className="recipe-text">your food image</div>
<input className="recipe-inputbtn" type="url" name="image" value={recipe.image} onChange={inputHandler} placeholder="Food image-(url)" />
<div className="recipe-text">your food caloriot</div>
<input className="recipe-inputbtn" type="number"  name="caloriot" value={recipe.caloriot} onChange={inputHandler} placeholder="caloriot" />
<div className="recipe-text">time to make</div>
<input className="recipe-inputbtn" type="number"  name="time" value={recipe.time} onChange={inputHandler} placeholder="time" />
<div className="recipe-text">click here to add your recipe</div>
<input className="recipe-btn" type="submit" name="add food" value="add Your Food" onClick={postdata}  />
</div>
<div className="recipe-header2">
<div className="recipe-text">Tap here how to make your food </div>
<textarea className="descriptions" value={recipe.info} name="info" rows="6" cols="26" onChange={inputHandler}  placeholder="click here to add your ingredients "/>
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
