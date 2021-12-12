import React, { useEffect, useState} from 'react';
import "./Recipe.css";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const RecipeApp = ({ auth: { user } }) => {
    const [meal, setMeal] = useState([]);
    const [recipe,setRecipe]=useState({
        name:'',
        image:'',
        caloriot:'',
        time:'',
        info:'',
        likes:"0"
        })
        const inputHandler = (e)=>{
            setRecipe({
            ...recipe,
            [e.target.name]:e.target.value,
        })
        }

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

        const deletedata = async (id) => {
            console.log(id);
            await axios.delete(`https://backend-finalproject-ameer.herokuapp.com/recipe/`+id,{method: 'delete'})
                .then(res => {
                    setMeal([...meal,res.data])
                });
                setMeal(meal.filter(meal => meal._id !== id))
        };


        // const Deletehandler = async (_id) => {
        //     const Delete = await axios.delete(
        //       `https://backend-finalproject-ameer.herokuapp.com/recipe/:${_id}`
        //     );
        //     if (Delete.status === 200) {
        //       const datalist = meal;
        //       let deletedfood = datalist.filter((meal) => {
        //         return meal._id !== _id;
        //       });
        //       setMeal(deletedfood);
        //     }
        //   };

        // const deleteRecipe = async (_id) => {
        //     await fetch(`https://backend-finalproject-ameer.herokuapp.com/recipe/${_id}`, {
        //       method: "DELETE",
        //     })
        
        //     await setMeal(meal.filter(meal => meal._id !== _id))
        //   }
        


        return (
            <div className="recipe-page">
                <div className="input-recipe">
                    <div className="recipe-header1">
                    <div className="recipe-text"> enter your name</div>
<input className="recipe-inputbtn" maxLength={9} type="text"  name="username" value={recipe.username} onChange={inputHandler} placeholder="your name" />
<div className="recipe-text"> your food name</div>
<input className="recipe-inputbtn"  maxLength={9} type="text"  name="name" value={recipe.name} onChange={inputHandler} placeholder="Food name" />
<div className="recipe-text">your food image</div>
<input className="recipe-inputbtn" type="url" name="image" value={recipe.image} onChange={inputHandler} placeholder="Food image-(url)" />
<div className="recipe-text">your food caloriot</div>
<input className="recipe-inputbtn"  type="number"  name="caloriot" value={recipe.caloriot} onChange={inputHandler} placeholder="caloriot" />
<div className="recipe-text">time to make</div>
<input className="recipe-inputbtn"  type="number"  name="time" value={recipe.time} onChange={inputHandler} placeholder="time" />
<div className="recipe-text">click here to add your recipe</div>
<input className="recipe-btn" type="submit" name="add food" value="add Your Food" onClick={postdata}  />
<h6 className="madebyuser" >Made by, {user&&user.name}</h6>
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
          <div className="recipelikes">likes:({e.likes}<i class="far fa-heart"></i>)</div>
          <div className="recipetextbutton">Made by:{e.username}</div>
          <div className="overlay">
          <div className="recipetextinfo"><div className="infoingtext">Ingredients</div>({e.info})</div>
          <input className="delete" type="button"  value="x" onClick={()=>{deletedata(e._id)}}  />

          </div>
          </div>
</div>
        )
          })}
          </div>
          </div>
        )  
}

RecipeApp.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(RecipeApp);
