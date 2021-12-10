import React,{ useState,useRef} from "react";
import "./Recipe.css";
import axios from "axios";
const RecipeApp = () => {
    const [recipe,setRecipe]=useState({
        name:'',
        image:'',
        caloriot:'',
        time:'',
        info:'',
        })

const ref=useRef() 
        const addNewRecipe=()=>{
            if(recipe.name.length>1){
                axios.post(`https://backend-finalproject-ameer.herokuapp.com/recipe`,recipe).then(ref.current.innerHTML="").catch((err)=>{
                    console.log(err);
                    ref.current.innerHTML="recipe is already exist"
                })
                ref.current.innerHTML="recipe add is successful"
        }
        else{ref.current.innerHTML="enter valid values"}
        }

        
  
              return (
                  <div className="recipe-page">
             
               </div>
              )
}

export default RecipeApp;
